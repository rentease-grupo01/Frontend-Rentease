import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotherComponent } from './fother.component';

describe('FotherComponent', () => {
  let component: FotherComponent;
  let fixture: ComponentFixture<FotherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FotherComponent]
    });
    fixture = TestBed.createComponent(FotherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
