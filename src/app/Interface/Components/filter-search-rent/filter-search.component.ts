import { Component } from '@angular/core';

interface Property {
  id: number;
  location: string;
  price: number;
  type: string;
}

@Component({
  selector: 'app-filter-search',
  templateUrl: './filter-search.component.html',
  styleUrls: ['./filter-search.component.css']
})
export class FilterSearchComponent {
  properties: Property[] = [
    { id: 1, location: 'Trujillo', price: 300, type: 'casa' },
    { id: 2, location: 'Lima', price: 600, type: 'departamento' },
    { id: 3, location: 'Chiclayo', price: 400, type: 'habitacion' },
    { id: 4, location: 'Iquitos', price: 500, type: 'casa' }
  ];

  filteredProperties: Property[] = [...this.properties];

  filters = {
    location: '',
    minPrice: null,
    maxPrice: null,
    propertyType: ''
  };

  applyFilters() {
    this.filteredProperties = this.properties.filter(property => {
      return (
        (this.filters.location === '' || property.location.includes(this.filters.location)) &&
        (this.filters.minPrice === null || property.price >= this.filters.minPrice) &&
        (this.filters.maxPrice === null || property.price <= this.filters.maxPrice) &&
        (this.filters.propertyType === '' || property.type === this.filters.propertyType)
      );
    });
  }
}
