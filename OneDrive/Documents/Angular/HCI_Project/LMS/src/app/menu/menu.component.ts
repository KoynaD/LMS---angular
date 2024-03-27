import { Component, OnInit, Input } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

   showList = [false, false, false, false, false];
   courseList = false;
   sessionComponents = ['Quiz', 'DNS - pre-reading','PPT','Assignment'];

  constructor() { }

  ngOnInit(): void { 
  }

  ShowList(index: number): void {
    if(index == 10000){
      this.courseList = !this.courseList;
    }
    else{
      this.showList[index] = !this.showList[index];
    if(this.showList[index] == true)
    {
      
    }

    }
    
  }

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'title',
      center: 'prev,next',
      right:''
    },
    plugins: [dayGridPlugin]
  };

  @Input() menuScreen = '';

}
