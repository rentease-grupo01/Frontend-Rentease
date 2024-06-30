import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordatorioPagosComponent } from './recordatorio-pagos.component';

describe('RecordatorioPagosComponent', () => {
  let component: RecordatorioPagosComponent;
  let fixture: ComponentFixture<RecordatorioPagosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecordatorioPagosComponent]
    });
    fixture = TestBed.createComponent(RecordatorioPagosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
