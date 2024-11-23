import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() label: string = '';
  @Input() type: string = 'button'
  @Input() disabled: boolean = false;
  @Input() icon?: string;
  @Input() iconOnly: boolean = false;
  @Input() buttonSecondary: boolean = false;
  @Output() click: EventEmitter<void> = new EventEmitter()

}
