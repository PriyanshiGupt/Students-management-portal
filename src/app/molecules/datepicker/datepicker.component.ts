import { Component, Input, ViewChild } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ErrorMessageComponent } from "../../atoms/error-message/error-message.component";
import { MatInputModule } from '@angular/material/input';
@Component({
  selector: 'app-datepicker',
  standalone: true,
  imports: [MatFormFieldModule, MatDatepickerModule, ReactiveFormsModule, FormsModule, ErrorMessageComponent, MatInputModule],
  templateUrl: './datepicker.component.html',
  styleUrl: './datepicker.component.scss'
})
export class DatepickerComponent {
  @ViewChild('picker') picker: any

  @Input() label: string = ''
  @Input() formGroup!: FormGroup;
  @Input() controlName!: string;
  @Input() min?: Date;
  @Input() max?: Date; 

  onDateInputFocus() {
    this.picker.open();
    this.formGroup.get(this.controlName)?.updateValueAndValidity();
  }

}
