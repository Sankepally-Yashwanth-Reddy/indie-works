import { CommonModule } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';
import { PostJobComponent } from '../../post-job/post-job.component';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, PostJobComponent, NgbPopoverModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  theme: string = 'light'; // Default theme

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.loadTheme();
  }

  setTheme(theme: string): void {
    this.theme = theme;
    localStorage.setItem('theme', theme);

    if (theme === 'dark') {
      this.renderer.addClass(document.body, 'dark-theme');
      this.renderer.removeClass(document.body, 'light-theme');
    } else {
      this.renderer.removeClass(document.body, 'dark-theme');
      this.renderer.addClass(document.body, 'light-theme');
    }
  }

  loadTheme(): void {
    const savedTheme = localStorage.getItem('theme') || 'light';
    this.setTheme(savedTheme);
  }
}
