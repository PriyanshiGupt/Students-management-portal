import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { ErrorMessageComponent } from '../error-message/error-message.component';

@Component({
  selector: 'app-radio',
  standalone: true,
  imports: [MatRadioModule, ReactiveFormsModule, MatFormFieldModule, ErrorMessageComponent],
  templateUrl: './radio.component.html',
  styleUrl: './radio.component.scss'
})
export class RadioComponent {
  @Input() label: string = "";
  @Input() formGroup!: FormGroup
  @Input() controlName!: string;
  @Input() options: string[] = [];
}
