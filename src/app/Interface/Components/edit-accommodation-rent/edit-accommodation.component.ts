import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-accommodation',
  templateUrl: './edit-accommodation.component.html',
  styleUrls: ['./edit-accommodation.component.css']
})
export class EditAccommodationComponent {
  accommodation = {
    title: '',
    description: '',
    price: '',
    contact: '',
    photos: [],
    video: null
  };
  errorMessage: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    if (this.isValidForm()) {
      // Aquí agregarías la lógica para enviar los datos al backend
      alert('Cambios guardados exitosamente!');
      this.router.navigate(['/my-accommodations']);
    } else {
      this.errorMessage = 'Por favor, complete todos los campos correctamente.';
    }
  }

  isValidForm() {
    const { title, description, price, contact } = this.accommodation;
    const pricePattern = /^S\/\d+(\.\d{2})?$/;
    return title && description && pricePattern.test(price) && contact;
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    // Validar el archivo aquí
    if (file) {
      // Agregar lógica para manejar el archivo
      alert('Archivo cargado exitosamente');
    } else {
      this.errorMessage = 'El archivo no cumple con los requisitos';
    }
  }
}
