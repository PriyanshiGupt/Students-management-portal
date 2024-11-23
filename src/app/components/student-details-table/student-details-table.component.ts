import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IStudentDetails } from '../../interfaces/student-details.interface';
import { MatTableModule } from '@angular/material/table';
import { ButtonComponent } from "../../atoms/button/button.component";
import { Router } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../../dialogs/confirmation-dialog/confirmation-dialog.component';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-student-details-table',
  standalone: true,
  imports: [MatTableModule, ButtonComponent, MatDialogModule, CommonModule, MatChipsModule],
  templateUrl: './student-details-table.component.html',
  styleUrl: './student-details-table.component.scss'
})
export class StudentDetailsTableComponent {

  constructor(
    private router: Router,
    private dialog: MatDialog,
  ) {}
  @Input() studentsData: IStudentDetails[] = []
  @Output() editStudent: EventEmitter<number> = new EventEmitter();
  @Output() deleteStudent: EventEmitter<number> = new EventEmitter();
  displayedColumns: string[] = ["rollNumber", "name", 'email', 'gender','dob' , 'standard', 'subjects','address', 'actions']
  confirmDeletion(student: IStudentDetails) {
    const studentDetails = [
      {
        key: 'Roll Number',
        value: student.rollNumber
      },
      {
        key: 'Name',
        value: student.name
      }
    ]
    const confirmationDialog = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        message: 'Are you sure you want to delete this student?',
        details: studentDetails
      },
      panelClass: 'custom-dialog'
    })

    confirmationDialog.afterClosed().subscribe({
      next: (confirmationStatus: boolean) => {
        if(confirmationStatus) {
          this.deleteStudent.emit(student.rollNumber)
        }
      }
    })
  }

  editEntry(student: IStudentDetails) {
    this.router.navigateByUrl(`/students/edit/${student.rollNumber}`)
  }
}
