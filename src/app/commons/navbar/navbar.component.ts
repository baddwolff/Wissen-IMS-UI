import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import {SaleService} from '../../Services/sale.service';
import {AuthService} from '../../Services/auth.service';
import {ProductService} from '../../Services/product.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  itemLength: number =0;
  subscription: Subscription;
  username: any;
  searchTerm: any;
  constructor(private saleService:SaleService,private authService:AuthService) {

  }

  ngOnInit(): void {

    this.username=this.authService.getUser()
    this.subscription = this.saleService.updateCartSizeSubject().subscribe(message => {
      this.itemLength=message;
    });
    // this is for search bar options outside modal
    // this.productService.getProductList().subscribe(data=>{
    //   this.products=data
    //   console.log(this.products)
    // })
  }


}
