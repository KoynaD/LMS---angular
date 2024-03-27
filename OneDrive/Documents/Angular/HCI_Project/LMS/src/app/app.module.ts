import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuComponent } from './menu/menu.component';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FullCalendarModule } from '@fullcalendar/angular';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { SubjectStudentComponent } from './subject-student/subject-student.component';
import { AssignmentOverviewComponent } from './assignment-overview/assignment-overview.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StudentdashboardComponent } from './studentdashboard/studentdashboard.component';
import { StudentnavbarComponent } from './studentnavbar/studentnavbar.component';
import { SubjectTeacherComponent } from './subject-teacher/subject-teacher.component';
import { StudentSessionsComponent } from './student-sessions/student-sessions.component';
import { StudentassignmentOverviewComponent } from './studentassignment-overview/studentassignment-overview.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    MenuComponent,
    TeacherDashboardComponent,
    SubjectStudentComponent,
    AssignmentOverviewComponent,
    StudentdashboardComponent,
    StudentnavbarComponent,
    SubjectTeacherComponent,
    StudentSessionsComponent,
    StudentassignmentOverviewComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatListModule,
    BrowserAnimationsModule,
    FullCalendarModule,
    MatProgressBarModule,
    NgCircleProgressModule.forRoot({
      "radius": 60,
      "space": -10,
      "outerStrokeGradient": true,
      "outerStrokeWidth": 10,
      "outerStrokeColor": "#00bF63",
      "outerStrokeGradientStopColor": "#00bF63",
      "innerStrokeColor": "#e7e8ea",
      "innerStrokeWidth": 10,
      "title": "35 \n out of \n 40",
      "animateTitle": false,
      "animationDuration": 1000,
      "showUnits": false,
      "showBackground": false,
      "clockwise": false,
      "startFromZero": false,
      "lazy": true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
