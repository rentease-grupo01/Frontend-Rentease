import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-rent',
  templateUrl: './login-rent.component.html',
  styleUrls: ['./login-rent.component.css']
})
export class LoginRentComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      remember: [false]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      if (username === 'user' && password === 'password') {
        alert('Login successful! Redirecting to home page...');
        this.router.navigate(['/home']);
      } else if (username !== 'user') {
        this.errorMessage = 'The username is not recognized.';
      } else {
        this.errorMessage = 'The password is incorrect.';
      }
    } else {
      this.errorMessage = 'Please fill out both fields.';
    }
  }

  onForgotPassword() {
    alert('Redirecting to the forgot password page...');
    this.router.navigate(['/forgot-password']);
  }

}
