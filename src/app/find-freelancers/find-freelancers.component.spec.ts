import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindFreelancersComponent } from './find-freelancers.component';

describe('FindFreelancersComponent', () => {
  let component: FindFreelancersComponent;
  let fixture: ComponentFixture<FindFreelancersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindFreelancersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindFreelancersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
