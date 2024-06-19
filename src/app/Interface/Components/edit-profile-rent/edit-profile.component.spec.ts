import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { EditProfileComponent } from './edit-profile.component';

describe('EditProfileComponent', () => {
  let component: EditProfileComponent;
  let fixture: ComponentFixture<EditProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProfileComponent ],
      imports: [ ReactiveFormsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show success message on saving profile', () => {
    component.saveProfile();
    expect(component.showSuccessMessage).toBe(true);
  });

  it('should detect no changes and show warning message', () => {
    component.form.controls.email.setValue(component.user.email);
    component.form.controls.phone.setValue(component.user.phone);
    component.saveProfile();
    expect(component.showNoChangesMessage).toBe(true);
  });

  it('should show error message if email format is invalid', () => {
    component.form.controls.email.setValue('invalid-email');
    component.saveProfile();
    expect(component.showErrorMessage).toBe(true);
  });

  it('should show error message if phone format is invalid', () => {
    component.form.controls.phone.setValue('123');
    component.saveProfile();
    expect(component.showErrorMessage).toBe(true);
  });

  it('should show required fields message if fields are empty', () => {
    component.form.controls.email.setValue('');
    component.form.controls.phone.setValue('');
    component.saveProfile();
    expect(component.form.errors?.requiredFields).toBeTruthy();
  });
});
