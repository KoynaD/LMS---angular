import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.component.html',
  styleUrls: ['./teacher-dashboard.component.css']
})
export class TeacherDashboardComponent implements OnInit {

  constructor() { }

  sessionHide:boolean[] = [true,true,true];
  notes:string[] = ["Teach pg 48","Mention the case study written by Rahul Kumar","Inform the students about quize net week."];


  ngOnInit(): void {
  }

  SessionHide(index: number):void
  {
    this.sessionHide[index] = !this.sessionHide[index];
  }

}
