import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRequestsOrOrdersComponent } from './my-requests-or-orders.component';

describe('MyRequestsOrOrdersComponent', () => {
  let component: MyRequestsOrOrdersComponent;
  let fixture: ComponentFixture<MyRequestsOrOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyRequestsOrOrdersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyRequestsOrOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
