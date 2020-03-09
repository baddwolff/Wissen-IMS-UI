import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from '../../Services/product.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  templateUrl: './product-details.component.html'
})
export class ProductDetailsComponent implements OnInit {
  @Input() product: any;
  id:number;
  constructor(private productService:ProductService,private route:ActivatedRoute) { }

  ngOnInit(): void {

    // this.route.params.forEach((params:Params)=>{
    //   this.product=this.route.snapshot.data['product'];
    //   console.log(this.product)
    // })
    this.productService.getProductByID(1).subscribe(data=>{
      this.product=data
      // console.log(data)
    })

  }

}
