import { Component, OnInit } from '@angular/core';
import {MiscService} from '../../Services/misc.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html'
})
export class NotificationsComponent implements OnInit {
  notifs: any;

  constructor(private miscService:MiscService) {
    miscService.provideNotifications().subscribe(data=>{
      this.notifs=data
      // console.log(this.notifs)
    })
  }

  ngOnInit(): void {
  }

}
