import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRentComponent } from './login-rent.component';

describe('LoginRentComponent', () => {
  let component: LoginRentComponent;
  let fixture: ComponentFixture<LoginRentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginRentComponent]
    });
    fixture = TestBed.createComponent(LoginRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
