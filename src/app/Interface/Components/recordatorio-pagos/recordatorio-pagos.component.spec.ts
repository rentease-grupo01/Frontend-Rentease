import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentRemindersComponent} from './recordatorio-pagos.component';

describe('RecordatorioPagosComponent', () => {
  let component: PaymentRemindersComponent;
  let fixture: ComponentFixture<PaymentRemindersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentRemindersComponent]
    });
    fixture = TestBed.createComponent(PaymentRemindersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
