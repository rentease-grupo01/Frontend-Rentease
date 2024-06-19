import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthUsuarioService } from '../../../Servicios/auth-usuario.service';

@Component({
  selector: 'app-login-rent',
  templateUrl: './login-rent.component.html',
  styleUrls: ['./login-rent.component.css']
})
export class LoginRentComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthUsuarioService) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      remember: [false]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      console.log('Form Values:', { username, password });

      this.authService.login(username, password).subscribe(
        response => {
          console.log('Login Response:', response);
          if (response.success) {
            if (response.role === 'ARRENDADOR') {
              this.router.navigate(['/arrendador-dash']);
            } else if (response.role === 'INQUILINO') {
              this.router.navigate(['/inquilino-dash']);
            } else {
              this.router.navigate(['/home']);
            }
          } else {
            this.errorMessage = response.message;
          }
        },
        error => {
          console.error('Login Error:', error);
          this.errorMessage = 'Error 404, Host en mantenimiento';
        }
      );
    } else {
      this.errorMessage = 'Por favor, complete todos los campos';
    }
  }

  onForgotPassword() {
    alert('Redirigiendo a la página de recuperación de contraseña...');
    this.router.navigate(['/forgot-password']);
  }
}
