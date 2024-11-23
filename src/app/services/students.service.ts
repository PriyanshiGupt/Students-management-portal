import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IAddStudentDetails, IStudentDetails } from '../interfaces/student-details.interface';
import { Gender } from '../enums/gender.enum';
import { STANDARDS } from '../constants/standards.constant';
import { COMMON_SUBJECTS } from '../constants/subjects.constant';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private studentsData: BehaviorSubject<IStudentDetails[]> = new BehaviorSubject<IStudentDetails[]>([
    {
      rollNumber: 1,
      name: 'Aparajita',
      dob: new Date().toString(),
      gender: Gender.FEMALE,
      email: 'aparajita@gmail.com',
      address: 'Quite a very long address , lalsadfsa flasf dasfl asfdsfsf safdddddddfds ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss',
      subjects: [COMMON_SUBJECTS[0], 'Stanography'],
      standard: STANDARDS[0]
    }
  ]);

  constructor() { }

  getStudents$() {
    return this.studentsData;
  }

  getStudentByRollNumber(rollNumber: number) {
    return this.studentsData.value.find(student => student.rollNumber === rollNumber);
  }

  addStudent(student : IAddStudentDetails) {
    const existingData = this.studentsData.value
    this.studentsData.next([...existingData, {
      ...student,
      rollNumber: existingData.length + 1,
    }])
  }

  editStudent(editedStudent: IStudentDetails) {
    const existingData = this.studentsData.value;
    this.studentsData.next(
      existingData.map(student => {
        if(student.rollNumber === editedStudent.rollNumber) {
          return editedStudent;
        }
        return student;
      })
    )
  }

  deleteStudent(rollNumber: number) {
    const existingData = this.studentsData.value;
    this.studentsData.next(
      existingData.filter(student => student.rollNumber !== rollNumber)
    )
  }
}
