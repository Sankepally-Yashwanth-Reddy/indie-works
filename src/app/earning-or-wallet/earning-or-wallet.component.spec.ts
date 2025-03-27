import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarningOrWalletComponent } from './earning-or-wallet.component';

describe('EarningOrWalletComponent', () => {
  let component: EarningOrWalletComponent;
  let fixture: ComponentFixture<EarningOrWalletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EarningOrWalletComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EarningOrWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
