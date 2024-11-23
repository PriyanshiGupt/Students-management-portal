import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ErrorMessageComponent } from '../error-message/error-message.component';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, ReactiveFormsModule, ErrorMessageComponent],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss'
})
export class SelectComponent {

  @Input() label: string = "";
  @Input() formGroup!: FormGroup
  @Input() controlName!: string;
  @Input() options: string[] = [];
}
