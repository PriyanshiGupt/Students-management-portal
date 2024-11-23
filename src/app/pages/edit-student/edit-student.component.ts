import { Component, OnInit } from '@angular/core';
import { AddEditStudentDetailsComponent } from "../../components/add-edit-student-details/add-edit-student-details.component";
import { PageMode } from '../../enums/pageMode.enum';
import { IStudentDetails } from '../../interfaces/student-details.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-edit-student',
  standalone: true,
  imports: [AddEditStudentDetailsComponent],
  templateUrl: './edit-student.component.html',
  styleUrl: './edit-student.component.scss'
})
export class EditStudentComponent implements OnInit{

  edit = PageMode.EDIT
  existingStudentDetails?: IStudentDetails
  rollNumber!: number;

  constructor(
    private studentService: StudentsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe({
      next: (params) => {
        const {id} = params;
        if(id) {
          this.rollNumber = +id;
          this.existingStudentDetails = this.getStudentByRollNumber()
          if(!this.existingStudentDetails) {
            this.navigateToStudentsPage()
          }
        } else {
          this.navigateToStudentsPage()
        }
      }
    })
  }

  getStudentByRollNumber(): IStudentDetails | undefined {
    return this.studentService.getStudentByRollNumber(this.rollNumber)
  }
  editStudent(student: IStudentDetails) {
    debugger;
    this.studentService.editStudent({...student, rollNumber: this.rollNumber});
    this.navigateToStudentsPage()
  }

  navigateToStudentsPage() {
    this.router.navigateByUrl('/students')
  }
}
