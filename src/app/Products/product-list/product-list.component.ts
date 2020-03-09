import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../Services/product.service';
import {ActivatedRoute, Params} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {

  public productList:any;
  constructor(private productService:ProductService,private route:ActivatedRoute) {
  }
  ngOnInit(): void {
    this.route.params.forEach((params:Params)=>{
      this.productList=this.route.snapshot.data['productList'];
      console.log(this.productList);
    })
  }

}
