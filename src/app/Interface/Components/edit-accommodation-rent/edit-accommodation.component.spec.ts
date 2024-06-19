import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { EditAccommodationComponent } from './edit-accommodation.component';

describe('EditAccommodationComponent', () => {
  let component: EditAccommodationComponent;
  let fixture: ComponentFixture<EditAccommodationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditAccommodationComponent],
      imports: [FormsModule, RouterTestingModule]
    });
    fixture = TestBed.createComponent(EditAccommodationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display error message if form is invalid', () => {
    component.accommodation.title = '';
    component.onSubmit();
    expect(component.errorMessage).toBe('Por favor, complete todos los campos correctamente.');
  });

  it('should navigate to /my-accommodations on successful form submission', () => {
    const router = TestBed.inject(RouterTestingModule);
    spyOn(router, 'navigate');
    component.accommodation = {
      title: 'Test Title',
      description: 'Test Description',
      price: 'S/1000.00',
      contact: '123456789',
      photos: [],
      video: null
    };
    component.onSubmit();
    expect(router.navigate).toHaveBeenCalledWith(['/my-accommodations']);
  });

  it('should validate price format correctly', () => {
    component.accommodation.price = 'S/1000.00';
    expect(component.isValidForm()).toBeTrue();
    component.accommodation.price = '1000.00';
    expect(component.isValidForm()).toBeFalse();
  });
});
