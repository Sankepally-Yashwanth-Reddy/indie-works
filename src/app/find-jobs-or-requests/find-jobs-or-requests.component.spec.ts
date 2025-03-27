import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindJobsOrRequestsComponent } from './find-jobs-or-requests.component';

describe('FindJobsOrRequestsComponent', () => {
  let component: FindJobsOrRequestsComponent;
  let fixture: ComponentFixture<FindJobsOrRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindJobsOrRequestsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindJobsOrRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
