import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  bar: boolean = false;

  menuScreen = 'd';

  constructor() { }

  ngOnInit(): void {
    this.bar = false;
  }

  onSearchIconHover(isHovering: boolean): void {
    if (isHovering) {
      this.bar = true;
    } else {
      this.bar = false; // Clear the message when mouse leaves the icon
    }

  }
  currentItem = 'Television';
}
