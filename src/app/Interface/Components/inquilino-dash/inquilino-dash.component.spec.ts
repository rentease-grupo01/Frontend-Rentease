import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InquilinoDashComponent } from './inquilino-dash.component';

describe('InquilinoDashComponent', () => {
  let component: InquilinoDashComponent;
  let fixture: ComponentFixture<InquilinoDashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InquilinoDashComponent]
    });
    fixture = TestBed.createComponent(InquilinoDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
