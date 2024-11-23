import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditStudentDetailsComponent } from './add-edit-student-details.component';

describe('AddEditStudentDetailsComponent', () => {
  let component: AddEditStudentDetailsComponent;
  let fixture: ComponentFixture<AddEditStudentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEditStudentDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditStudentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
