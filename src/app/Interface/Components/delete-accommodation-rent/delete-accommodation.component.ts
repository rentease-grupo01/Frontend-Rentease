import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-accommodation',
  templateUrl: './delete-accommodation.component.html',
  styleUrls: ['./delete-accommodation.component.css']
})
export class DeleteAccommodationComponent {
  accommodations = [
    { id: 1, title: 'Trujillo, La Libertad' },
    { id: 2, title: 'Lima, Lima' },
    { id: 3, title: 'Chiclayo, Lambayeque' },
    { id: 4, title: 'Iquitos, Loreto' }
  ];

  showConfirmation = false;
  accommodationIdToDelete: number | null = null;

  confirmDelete(id: number) {
    this.showConfirmation = true;
    this.accommodationIdToDelete = id;
  }

  cancelDelete() {
    this.showConfirmation = false;
    this.accommodationIdToDelete = null;
  }

  deleteAccommodation() {
    if (this.accommodationIdToDelete !== null) {
      this.accommodations = this.accommodations.filter(
        acc => acc.id !== this.accommodationIdToDelete
      );
      this.showConfirmation = false;
      this.accommodationIdToDelete = null;
      alert('Alojamiento eliminado exitosamente.');
    }
  }
}
