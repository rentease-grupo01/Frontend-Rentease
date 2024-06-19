import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-ret',
  templateUrl: './register-ret.component.html',
  styleUrls: ['./register-ret.component.css']
})
export class RegisterRetComponent {
  registerForm: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private router: Router) {
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
    if (this.registerForm.get('role')?.value === 'tenant') {
      this.registerForm.get('preferences')?.setValidators([Validators.required]);
    } else {
      this.registerForm.get('preferences')?.clearValidators();
    }
    this.registerForm.get('preferences')?.updateValueAndValidity();
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const formData = this.registerForm.value;
      // Simulate a registration attempt
      if (this.isDniTaken(formData.dni)) {
        this.errorMessage = 'The DNI is already associated with an existing account.';
      } else if (this.isPhoneTaken(formData.phone)) {
        this.errorMessage = 'The phone number is already associated with an existing account.';
      } else if (this.isUsernameTaken(formData.username)) {
        this.errorMessage = 'The username is already taken.';
      } else {
        alert('Registration successful! Redirecting to the login page...');
        this.router.navigate(['/log-rent']);
      }
    } else {
      this.errorMessage = 'Please fill out all required fields correctly.';
    }
  }

  isDniTaken(dni: string): boolean {
    // Simulate checking for existing DNI
    return false;
  }

  isPhoneTaken(phone: string): boolean {
    // Simulate checking for existing phone number
    return false;
  }

  isUsernameTaken(username: string): boolean {
    // Simulate checking for existing username
    return false;
  }
}
