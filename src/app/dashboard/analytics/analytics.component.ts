import { Component, OnInit } from '@angular/core';
import {MiscService} from '../../Services/misc.service';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html'
})
export class AnalyticsComponent implements OnInit {

  constructor(private miscService:MiscService) { }
  public analytics:any={}
  ngOnInit(): void {
    this.miscService.provideAnalytics().subscribe(data=>{
      data.forEach(item=>{
        this.analytics[item.col]=item.val
      })


    })
  }


}
