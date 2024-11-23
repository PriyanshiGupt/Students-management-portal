import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from "../../atoms/button/button.component";
import { Router } from '@angular/router';
import { ConfirmationDialogComponent } from '../../dialogs/confirmation-dialog/confirmation-dialog.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { IStudentDetails } from '../../interfaces/student-details.interface';
import { StudentsService } from '../../services/students.service';
import { StudentDetailsTableComponent } from "../../components/student-details-table/student-details-table.component";
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [ButtonComponent, MatDialogModule, StudentDetailsTableComponent, CommonModule],
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})
export class StudentsComponent implements OnInit {

  students$!: Observable<IStudentDetails[]>;

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private studentsService: StudentsService
  ) {}

  ngOnInit() {
    this.students$ = this.studentsService.getStudents$();
  }

  getStudents() {

  }
  addStudent() {
    this.router.navigateByUrl('/students/add')
  }

  deleteStudent(rollNumber: number) {
    this.studentsService.deleteStudent(rollNumber)
  }
}
