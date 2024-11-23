import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import {
  MatAutocompleteModule,
  MatAutocompleteSelectedEvent,
} from '@angular/material/autocomplete';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { ErrorMessageComponent } from "../../atoms/error-message/error-message.component";

@Component({
  selector: 'app-multi-input-autocomplete',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatIconModule,
    ReactiveFormsModule,
    ErrorMessageComponent
],
  templateUrl: './multi-input-autocomplete.component.html',
  styleUrl: './multi-input-autocomplete.component.scss',
})
export class MultiInputAutocompleteComponent implements OnInit {
  @ViewChild('chipInput', { static: false }) chipInputElement!: any;

  chipInputControl: FormControl;
  @Input() label: string = 'Label';
  @Input() formGroup!: FormGroup;
  @Input() controlName!: string;
  @Input() placeholder: string = '';
  @Input() options: string[] = [];

  constructor() {
    this.chipInputControl = new FormControl();
  }

  selectedOptions: string[] = [];
  unselectedOptions: string[] = [];
  filteredOptions: string[] = [];

  ngOnInit() {
    this.selectedOptions = this.formGroup.get(this.controlName)?.value ?? []
    this.unselectedOptions = this.options.filter(opt => !this.selectedOptions.includes(opt));
    this.filteredOptions = this.unselectedOptions;
    this.chipInputControl.valueChanges.subscribe({
      next: (value) => {
        console.log('chip value', value);
        if (!value) {
          this.filteredOptions = this.unselectedOptions;
        } else {
          this.filteredOptions = this.unselectedOptions.filter(
            (opt) => opt.toLowerCase().indexOf(value.toLowerCase()) > -1
          );
        }
      },
    });
  }

  setFormControlValue(value: string[]) {
    this.formGroup.get(this.controlName)?.setValue(value);
  }

  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  remove(option: string) {
    this.selectedOptions = this.selectedOptions.filter((opt) => opt !== option);
    this.unselectedOptions.push(option);
    this.setFormControlValue(this.selectedOptions);
  }

  add(selectedValue: string) {
    this.selectedOptions.push(selectedValue);
    this.setFormControlValue(this.selectedOptions);
    this.unselectedOptions = this.unselectedOptions.filter(
      (opt) => opt !== selectedValue
    );
    this.filteredOptions = this.unselectedOptions;
    console.log(this.chipInputElement);
    if (this.chipInputElement) {
      console.log(this.chipInputElement);
      this.chipInputElement.nativeElement.value = ''
    }
  }

  inputTokenEnded(event: MatChipInputEvent) {
    const selectedValue = (event.value || '').trim();
    if(selectedValue) {
      this.add(selectedValue);
    }
  }

  optionSelected(event: MatAutocompleteSelectedEvent) {
    const selectedValue = event.option.viewValue;
    this.add(selectedValue);
  }
}
