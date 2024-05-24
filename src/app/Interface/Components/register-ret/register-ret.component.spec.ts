import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterRetComponent } from './register-ret.component';

describe('RegisterRetComponent', () => {
  let component: RegisterRetComponent;
  let fixture: ComponentFixture<RegisterRetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterRetComponent]
    });
    fixture = TestBed.createComponent(RegisterRetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
