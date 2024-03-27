import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LoginComponent} from './login/login.component'
import {TeacherDashboardComponent} from './teacher-dashboard/teacher-dashboard.component';
import { MenuComponent} from './menu/menu.component';
import {SubjectStudentComponent}  from './subject-student/subject-student.component';
import {SubjectTeacherComponent} from './subject-teacher/subject-teacher.component'
import {NavbarComponent} from './navbar/navbar.component'
import {StudentnavbarComponent} from './studentnavbar/studentnavbar.component'
import { StudentassignmentOverviewComponent} from './studentassignment-overview/studentassignment-overview.component'

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'teacherdashboard', component: NavbarComponent },
  { path: 'teacherAssignmentOverview', component: SubjectTeacherComponent },
  { path: 'studentdashboard', component: StudentnavbarComponent },
  { path: 'StudentSubSess', component: SubjectStudentComponent },
  { path: 'studentAssignmentOverview', component: StudentassignmentOverviewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
