import { Component, OnInit } from '@angular/core';
import {SaleService} from '../../Services/sale.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-sale-list',
  templateUrl: './sale-list.component.html'
})
export class SaleListComponent implements OnInit {
  salesList: any;

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.forEach((params:Params)=>{
      this.salesList=this.route.snapshot.data['salesList'];
    })
  }

}
