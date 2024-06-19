import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { FilterSearchComponent } from './filter-search.component';

describe('FilterSearchComponent', () => {
  let component: FilterSearchComponent;
  let fixture: ComponentFixture<FilterSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterSearchComponent],
      imports: [FormsModule]
    });
    fixture = TestBed.createComponent(FilterSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should filter properties based on location', () => {
    component.filters.location = 'Lima';
    component.applyFilters();
    expect(component.filteredProperties.length).toBe(1);
    expect(component.filteredProperties[0].location).toBe('Lima');
  });

  it('should filter properties based on price range', () => {
    component.filters.minPrice = 400;
    component.filters.maxPrice = 600;
    component.applyFilters();
    expect(component.filteredProperties.length).toBe(3);
    expect(component.filteredProperties.every(p => p.price >= 400 && p.price <= 600)).toBeTrue();
  });

  it('should filter properties based on type', () => {
    component.filters.propertyType = 'casa';
    component.applyFilters();
    expect(component.filteredProperties.length).toBe(2);
    expect(component.filteredProperties.every(p => p.type === 'casa')).toBeTrue();
  });

  it('should show no results message if no properties match the filters', () => {
    component.filters.location = 'Cusco';
    component.applyFilters();
    expect(component.filteredProperties.length).toBe(0);
  });
});
