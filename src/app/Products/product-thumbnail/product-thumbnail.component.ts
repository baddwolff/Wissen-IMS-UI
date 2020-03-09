import {Component, Input, OnInit} from '@angular/core';

import {SaleService} from '../../Services/sale.service';
import {ProductService} from '../../Services/product.service';

@Component({
  selector: 'product-thumbnail',
  templateUrl: './product-thumbnail.component.html'
})
export class ProductThumbnailComponent implements OnInit {

  @Input() public product
  isAdded: boolean=true;
  amount:number =0;

  constructor(private saleService:SaleService,private productService:ProductService) {

  }

  ngOnInit(): void {
    this.isAdded=true;
    // console.log(this.product.id)
    if(this.saleService.productInCart(this.product.id)){
      this.isAdded=false
      // console.log(this.isAdded)

      this.amount=this.saleService.getAmount(this.product.id)
    }
    else {
      this.amount=0
    }
  }

  toggleIsAdded(){
    this.isAdded=!this.isAdded
    if(!this.isAdded){
      this.amount=1;
    }
  }


  incrementAmount(){
    this.saleService.incrementAmount(this.product.id)
    this.amount+=1
  }

  decrementAmount(){
    if(this.amount<=1){
      this.toggleIsAdded()
      this.saleService.deleteProduct(this.product.id)
    }
    else{
      this.saleService.decrementAmount(this.product.id)
      this.amount-=1
    }

  }

  addProduct(){
    let payload= {
      "id":this.product.id,
      "name":this.product.name,
      "company":this.product.company,
      "price":this.product.price,
      "amount":1}

    this.saleService.addProduct(payload)

  }
  removeProduct(){
    this.saleService.deleteProduct(this.product.id)
  }


}
