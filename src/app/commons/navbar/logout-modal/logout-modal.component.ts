import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../Services/auth.service';

@Component({
  selector: 'app-logout-modal',
  templateUrl: './logout-modal.component.html'
})
export class LogoutModalComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  logoutUser() {
    console.log("here")
    this.authService.logoutUser()
  }
}
