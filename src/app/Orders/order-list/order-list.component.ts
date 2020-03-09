import { Component, OnInit } from '@angular/core';
import {SaleService} from '../../Services/sale.service';
import {OrderService} from '../../Services/order.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html'
})
export class OrderListComponent implements OnInit {
  orderList: any;

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.forEach((params:Params)=>{
      this.orderList=this.route.snapshot.data['orderList'];
    })
  }
}
