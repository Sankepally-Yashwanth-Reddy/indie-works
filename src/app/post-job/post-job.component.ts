import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, model, signal } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Job, JobService } from '../services/job/job.service';

@Component({
  selector: 'app-post-job',
  imports: [CommonModule, MatFormFieldModule, MatChipsModule, MatIconModule, MatAutocompleteModule, FormsModule, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './post-job.component.html',
  styleUrl: './post-job.component.css'
})
export class PostJobComponent {
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  readonly categories = signal<string[]>(['Design']);
  readonly allCategories: string[] = ['Design', 'Writing', 'Development', 'Marketing', 'Photography', 'Consulting'];
  readonly announcer = inject(LiveAnnouncer);

  jobForm: FormGroup;

  // Currency Options
  currencyOptions = [
    { value: 'USD', symbol: '$' },
    { value: 'EUR', symbol: '€' },
    { value: 'GBP', symbol: '£' },
    { value: 'INR', symbol: '₹' }
  ];

  selectedCurrencySymbol = this.currencyOptions[0].symbol; // Default: USD ($)

  constructor(private fb: FormBuilder, private jobService: JobService) {
    this.jobForm = this.fb.group({
      jobTitle: ['', [Validators.required, Validators.minLength(5)]],
      budget: ['', [Validators.required, Validators.min(1)]],
      deadline: [''],
      jobDescription: ['', [Validators.required, Validators.minLength(15)]],
      attachments: ['']
    });
  }

  onCurrencyChange(event: Event) {
    const selectedCurrency = (event.target as HTMLSelectElement).value;
    const currency = this.currencyOptions.find(c => c.value === selectedCurrency);
    this.selectedCurrencySymbol = currency ? currency.symbol : '$';
  }

  addCategory(event: any): void {
    const value = (event.value || '').trim();
    if (value && !this.categories().includes(value)) {
      this.categories.update((categories) => [...categories, value]);
      this.announcer.announce(`Added category: ${value}`);
    }
    event.chipInput!.clear();
  }

  removeCategory(category: string): void {
    this.categories.update((categories) => categories.filter((c) => c !== category));
    this.announcer.announce(`Removed category: ${category}`);
  }

  selectedCategory(event: MatAutocompleteSelectedEvent): void {
    const selectedCategory = event.option.viewValue;
    if (!this.categories().includes(selectedCategory)) {
      this.categories.update((categories) => [...categories, selectedCategory]);
      this.announcer.announce(`Added category: ${selectedCategory}`);
    }
  }

  onPostJobSubmit() {
    if (this.jobForm.valid) {
      const jobData: Job = this.jobForm.value;
      this.jobService.addJob(jobData); // Store in service
      console.log('Job Posted:', jobData);
    } else {
      console.log('Form is invalid');
    }
  }
}
