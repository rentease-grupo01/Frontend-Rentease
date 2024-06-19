import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrendadorDashComponent } from './arrendador-dash.component';

describe('ArrendadorDashComponent', () => {
  let component: ArrendadorDashComponent;
  let fixture: ComponentFixture<ArrendadorDashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArrendadorDashComponent]
    });
    fixture = TestBed.createComponent(ArrendadorDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
