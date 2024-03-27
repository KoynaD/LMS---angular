import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-sessions',
  templateUrl: './student-sessions.component.html',
  styleUrls: ['./student-sessions.component.css']
})
export class StudentSessionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  sessionHide:boolean[] = [true,true,true];
  notes:string[] = ["Teach pg 48","Mention the case study written by Rahul Kumar","Inform the students about quize net week."];


  SessionHide(index: number):void
  {
    this.sessionHide[index] = !this.sessionHide[index];
  }


}
