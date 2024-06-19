import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeleteAccommodationComponent } from './delete-accommodation.component';

describe('DeleteAccommodationComponent', () => {
  let component: DeleteAccommodationComponent;
  let fixture: ComponentFixture<DeleteAccommodationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteAccommodationComponent]
    });
    fixture = TestBed.createComponent(DeleteAccommodationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show confirmation dialog when delete button is clicked', () => {
    component.confirmDelete(1);
    expect(component.showConfirmation).toBeTrue();
  });

  it('should hide confirmation dialog when cancel button is clicked', () => {
    component.confirmDelete(1);
    component.cancelDelete();
    expect(component.showConfirmation).toBeFalse();
  });

  it('should delete accommodation when confirm delete is clicked', () => {
    component.confirmDelete(1);
    component.deleteAccommodation();
    expect(component.accommodations.length).toBe(3);
    expect(component.accommodations.some(acc => acc.id === 1)).toBeFalse();
  });
});
