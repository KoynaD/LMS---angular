import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'; // Import FormsModule
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  reactiveForm!: FormGroup;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      EmailId : new FormControl(null),
      Password : new FormControl(null)
      
    })
  }

  onLogin()
  {
    var email = this.reactiveForm.value.EmailId;
    var pass =  this.reactiveForm.value.Password;
    if(email == "teachername@faculty.in")
    {
      this.router.navigate(['/teacherdashboard']);
    }
    else if(email == "studentname@edu.in")
    {
      this.router.navigate(['/studentdashboard']);
    }
  }

  

}
