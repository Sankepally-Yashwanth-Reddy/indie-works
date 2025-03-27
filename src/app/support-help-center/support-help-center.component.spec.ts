import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportHelpCenterComponent } from './support-help-center.component';

describe('SupportHelpCenterComponent', () => {
  let component: SupportHelpCenterComponent;
  let fixture: ComponentFixture<SupportHelpCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupportHelpCenterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupportHelpCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
