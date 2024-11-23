import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog'
import { ButtonComponent } from '../../atoms/button/button.component';
import { IConfirmationDialogData } from '../../interfaces/confirmation-dialog.interface';
import { IKeyValuePair } from '../../interfaces/key-value-pair.interface';

@Component({
  selector: 'app-confirmation-dialog',
  standalone: true,
  imports: [MatDialogModule, ButtonComponent],
  templateUrl: './confirmation-dialog.component.html',
  styleUrl: './confirmation-dialog.component.scss'
})
export class ConfirmationDialogComponent {
  message: string;
  details: IKeyValuePair[] = [];
  constructor(
    private matDialogRef: MatDialogRef<ConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) dialogData: IConfirmationDialogData
  ) {
    this.message = dialogData.message
    this.details = dialogData.details ?? []
  }
  closeDialog(confirmationStatus: boolean) {
    this.matDialogRef.close(confirmationStatus);
  }
}
