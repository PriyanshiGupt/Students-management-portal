import { Routes } from '@angular/router';
import { AddEditStudentDetailsComponent } from './components/add-edit-student-details/add-edit-student-details.component';
import { StudentsComponent } from './pages/students/students.component';
import { AddStudentComponent } from './pages/add-student/add-student.component';
import { EditStudentComponent } from './pages/edit-student/edit-student.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'students',
    }, 
    {
        path: 'students',
        pathMatch: 'full',
        component: StudentsComponent,
    }, 
    {
        path: 'students/add',
        component: AddStudentComponent
    }, 
    {
        path: 'students/edit/:id',
        component: EditStudentComponent
    }
];
