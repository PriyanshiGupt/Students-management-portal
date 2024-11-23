import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import { InputComponent } from '../../atoms/input/input.component';
import { DatepickerComponent } from '../../molecules/datepicker/datepicker.component';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { IStudentDetails } from '../../interfaces/student-details.interface';
import { PageMode } from '../../enums/pageMode.enum';
import { ButtonComponent } from '../../atoms/button/button.component';
import { RadioComponent } from '../../atoms/radio/radio.component';
import { SelectComponent } from '../../atoms/select/select.component';
import { STANDARDS } from '../../constants/standards.constant';
import { COMMON_SUBJECTS } from '../../constants/subjects.constant';
import { GENDER } from '../../constants/gender.constants';
import { MultiInputAutocompleteComponent } from '../../molecules/multi-input-autocomplete/multi-input-autocomplete.component';
import { Router } from '@angular/router';
import { ArrayLengthValidator} from '../../validators/arrayLength.validator'

@Component({
  selector: 'app-add-edit-student-details',
  standalone: true,
  imports: [
    InputComponent,
    DatepickerComponent,
    ReactiveFormsModule,
    ButtonComponent,
    RadioComponent,
    SelectComponent,
    MultiInputAutocompleteComponent,
  ],
  templateUrl: './add-edit-student-details.component.html',
  styleUrl: './add-edit-student-details.component.scss',
})
export class AddEditStudentDetailsComponent {
  studentForm!: FormGroup;
  today: Date = new Date();

  @Input() studentDetails?: IStudentDetails;
  @Input() mode: PageMode = PageMode.ADD;
  @Output() formSubmit: EventEmitter<IStudentDetails> = new EventEmitter();

  PAGE_MODE = PageMode;
  StandardOptions = STANDARDS;
  SubjectOptions = COMMON_SUBJECTS;
  GenderOptions = GENDER;

  constructor(
    private formBuilder: FormBuilder, 
    private router: Router
  ) {
    this.initializeForm()
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.studentDetails) {
      this.onStudentDetailChange(changes.studentDetails.currentValue);
    }
  }
  initializeForm() {
    this.studentForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      dob: [null, [Validators.required]],
      gender: [null, [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required]],
      subjects: [[], [ArrayLengthValidator(3,10)]],
      standard: ['', [Validators.required]],
    });
  }

  onStudentDetailChange(studentDetails?: IStudentDetails) {
    if (!studentDetails) {
      this.studentForm.reset();
      return;
    }
    this.studentForm.patchValue({
      ...studentDetails,
    });
  }

  AddUpdateStudent() {
    if (this.studentForm.invalid) {
      this.studentForm.markAllAsTouched();
      console.log('not submited')
      return;
    }
    console.log('submiting')
    this.formSubmit.emit(this.studentForm.value);
  }
}
