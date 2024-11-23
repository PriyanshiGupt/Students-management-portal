import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-error-message',
  standalone: true,
  imports: [MatInputModule, CommonModule],
  templateUrl: './error-message.component.html',
  styleUrl: './error-message.component.scss',
})
export class ErrorMessageComponent {
  @Input() formGroup!: FormGroup;
  @Input() controlName!: string;

  get control(): AbstractControl | null {
    return this.formGroup?.get(this.controlName) || null;
  }

  get errorMessage(): string | null {
    if (!(this.control?.errors && this.control?.touched)) return null;

    const errors = this.control.errors;
    console.log('errors', errors);
    const errorKey = Object.keys(errors)?.[0] ?? '';

    switch (errorKey) {
      case 'required':
        return 'This field is required.';
      case 'email':
        return 'Please enter a valid email address.';
      case 'customError': 
        return errors[errorKey]?.message;
      default:
        return 'Invalid value.';
    }
  }
}
