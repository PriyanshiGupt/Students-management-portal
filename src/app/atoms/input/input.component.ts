import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ErrorMessageComponent } from "../error-message/error-message.component";

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule, ErrorMessageComponent, CommonModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {

  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() formGroup!: FormGroup;
  @Input() controlName!: string;
  @Input() type: string = 'text';

}
