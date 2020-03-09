import { Component, OnInit } from '@angular/core';
import {OrderService} from '../../Services/order.service';
import {SaleService} from '../../Services/sale.service';
import {ProductService} from '../../Services/product.service';

@Component({
  selector: 'app-create-sale',
  templateUrl: './create-sale.component.html'
})
export class CreateSaleComponent implements OnInit {

  salesCart:any;
  newSale: any;
  constructor(private salesService:SaleService,private productService:ProductService) {
    this.salesCart=this.salesService.getCart()
  }

  ngOnInit(): void {

  }

  decrementAmount(productId:number) {

    this.salesService.decrementAmount(productId)

  }
  incrementAmount(productId:number) {
    this.salesService.incrementAmount(productId)

  }

  deleteProduct(productId: any) {
    this.salesService.deleteProduct(productId)

  }

  addProduct(productID,amount) {
    productID= parseInt(productID)
    let res
    this.productService.getProductByID(productID).subscribe(data=>{
      res=data
      if(res==undefined){
        alert("invalid product")
      }
      else{
        let payload= res
        payload.amount=parseInt(amount)
        this.salesService.addProduct(payload)
      }
    });
  }

  checkOut(formValues: any) {
    formValues.total=this.salesCart.total
    formValues.entries=this.salesCart.entries
    // console.log(formValues)
    this.salesService.checkOut(formValues).subscribe(data=>{
      // console.log(data)
      this.salesService.clearCart()
      this.salesCart.entries=[]
      this.salesCart.total=0
    })
    // this.salesCart=this.salesService.getCart()
  }
}
