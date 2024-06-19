import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {
  user = {
    email: 'usuario@example.com',  // Puedes inicializar con datos del usuario actual
    phone: '1234567890'
  };
  form: FormGroup;
  formSubmitted = false;
  showSuccessMessage = false;
  showNoChangesMessage = false;
  showErrorMessage = false;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: [this.user.email, [Validators.required, Validators.email]],
      phone: [this.user.phone, [Validators.required, Validators.pattern('[0-9]{10}')]]
    }, { validators: this.checkIfFieldsChanged });
  }

  saveProfile() {
    this.formSubmitted = true;

    if (this.form.valid) {
      // Simulación de guardado exitoso (aquí se haría la llamada HTTP al servidor para guardar los datos)
      this.showSuccessMessage = true;
      setTimeout(() => this.showSuccessMessage = false, 3000);
    } else if (this.form.errors?.requiredFields) {
      // Si falta algún campo requerido
      return;
    } else if (this.form.controls.email.invalid) {
      // Si el formato del correo es inválido
      return;
    } else if (this.form.controls.phone.invalid) {
      // Si el formato del teléfono es inválido
      return;
    } else {
      // Otros errores
      this.showErrorMessage = true;
    }
  }

  checkIfFieldsChanged(formGroup: FormGroup) {
    const emailChanged = formGroup.get('email').value !== this.user.email;
    const phoneChanged = formGroup.get('phone').value !== this.user.phone;

    if (!emailChanged && !phoneChanged) {
      return { requiredFields: true };
    }

    return null;
  }
}
