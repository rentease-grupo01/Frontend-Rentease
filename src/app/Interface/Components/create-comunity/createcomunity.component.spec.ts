import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CreateComunityComponent } from './createcomunity.component';
import { ComunityV1Service } from '../../../Servicios/comunity-v1.service';

describe('CreateComunityComponent', () => {
  let component: CreateComunityComponent;
  let fixture: ComponentFixture<CreateComunityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateComunityComponent],
      imports: [
        ReactiveFormsModule,
        MatSnackBarModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        NoopAnimationsModule,
        HttpClientTestingModule
      ],
      providers: [ComunityV1Service]
    })
    .compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateComunityComponent]
    });
    fixture = TestBed.createComponent(CreateComunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form should be invalid when empty', () => {
    expect(component.communityForm.valid).toBeFalsy();
  });

  it('name field validity', () => {
    const name = component.communityForm.controls['name'];
    expect(name.valid).toBeFalsy();

    name.setValue('Test Community');
    expect(name.errors).toBeNull();
    expect(name.valid).toBeTruthy();
  });

  it('description field validity', () => {
    const description = component.communityForm.controls['description'];
    expect(description.valid).toBeFalsy();

    description.setValue('This is a test community description.');
    expect(description.errors).toBeNull();
    expect(description.valid).toBeTruthy();
  });

  it('should call onSubmit method', () => {
    spyOn(component, 'onSubmit');
    const form = fixture.debugElement.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('submit'));

    expect(component.onSubmit).toHaveBeenCalled();
  });
});
