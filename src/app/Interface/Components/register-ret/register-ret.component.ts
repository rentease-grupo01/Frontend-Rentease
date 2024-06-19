import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthUsuarioService } from '../../../Servicios/auth-usuario.service';

@Component({
  selector: 'app-register-ret',
  templateUrl: './register-ret.component.html',
  styleUrls: ['./register-ret.component.css']
})
export class RegisterRetComponent {
  registerForm: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthUsuarioService) {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dni: ['', [Validators.required, Validators.pattern('^[0-9]{8}$')]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{9}$')]],
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      role: ['', Validators.required],
      preferences: this.fb.group({
        price: [''],
        location: [''],
        type: ['']
      })
    });
  }

  onRoleChange() {
    if (this.registerForm.get('role')?.value === 'INQUILINO') {
      this.registerForm.get('preferences')?.setValidators([Validators.required]);
    } else {
      this.registerForm.get('preferences')?.clearValidators();
    }
    this.registerForm.get('preferences')?.updateValueAndValidity();
  }

  onSubmit() {
    if (this.registerForm.valid) {
        const formData = this.registerForm.value;
        const user = {
            apellido: formData.lastName,
            nombre: formData.firstName,
            dni: formData.dni,
            telefono: formData.phone,
            email: formData.email, // Cambiado de 'correo' a 'email'
            username: formData.username,
            password: formData.password,
            role: formData.role.toUpperCase()
        };

        this.authService.register(user).subscribe(
            response => {
                alert('Registration successful! Redirecting to the login page...');
                this.router.navigate(['/log-rent']);
            },
            error => {
                this.errorMessage = error.error.message || 'Registration failed. Please try again.';
                console.error('Registration Error:', error);
            }
        );
    } else {
        this.errorMessage = 'Please fill out all required fields correctly.';
    }
}

}
