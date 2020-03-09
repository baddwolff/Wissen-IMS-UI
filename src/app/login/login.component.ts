
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  newLogin: any;

  constructor(private route:Router,private authService:AuthService) { }

  ngOnInit(): void {
  }

  login(formValues) {
    // console.log(formValues)
    this.authService.loginUser(formValues.userName,formValues.password).subscribe(data=>{
      // console.log(data)
      if(data==true){
        this.authService.redirectLogin(formValues.userName);
      }
      else {
        this.authService.logoutUser();

      }
    })

  }
}
