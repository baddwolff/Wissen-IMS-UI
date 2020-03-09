import { Component, OnInit } from '@angular/core';
import {OrderService} from '../../Services/order.service';
import {ProductService} from '../../Services/product.service';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html'
})
export class CreateOrderComponent implements OnInit {

  orderCart:any;
  newOrder: any;
  constructor(private orderService:OrderService,private productService:ProductService) {
    this.orderCart=this.orderService.getCart()
  }


  ngOnInit(): void {

  }

  decrementAmount(productId:number) {
    this.orderService.decrementAmount(productId)

  }
  incrementAmount(productId:number) {
    this.orderService.incrementAmount(productId)

  }

  deleteProduct(productId: any) {
    this.orderService.deleteProduct(productId)

  }

  addProduct(productID,amount) {
    productID= parseInt(productID)
    this.productService.getProductByID(productID).subscribe(data=>{
      let res=data
      if(res==undefined){
        alert("invalid product")
      }
      else{
        let payload =res
        payload.amount=parseInt(amount)
        // console.log(payload)
        this.orderService.addProduct(payload)
      }
    })

  }

  checkOut(formValues: any) {
    formValues.total=this.orderCart.total
    formValues.entries=this.orderCart.entries
    console.log(formValues)
    this.orderService.checkOut(formValues).subscribe(data=>{
      console.log(data)
      this.orderService.clearCart()
      this.orderCart.entries=[]
      this.orderCart.total=0


    })
    // this.orderCart=this.orderService.getCart()
  }

}
