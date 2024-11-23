import { Component } from '@angular/core';
import { AddEditStudentDetailsComponent } from '../../components/add-edit-student-details/add-edit-student-details.component';
import { PageMode } from '../../enums/pageMode.enum';
import { IAddStudentDetails } from '../../interfaces/student-details.interface';
import { StudentsService } from '../../services/students.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [AddEditStudentDetailsComponent],
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.scss'
})
export class AddStudentComponent {

  add = PageMode.ADD
  constructor(
    private studentsService: StudentsService,
    private router: Router,
  ) {}

  addStudent(student: IAddStudentDetails) {
    console.log('student submitted at addSubmit')
    this.studentsService.addStudent(student);
    this.router.navigateByUrl('/students')
  }

}
