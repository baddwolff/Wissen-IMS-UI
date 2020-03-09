import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../Services/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html'
})
export class CreateProductComponent implements OnInit {
  newProduct: any;
 constructor(private productService:ProductService) {
 }

 ngOnInit(): void {
 }

  addProduct(formValues: any) {
    console.log(formValues)
    let payload = {
      "id": 5,
      "name": formValues.name,
      "company": formValues.company,
      "price": formValues.price,
      "amount": formValues.amount
    }
    this.productService.addProduct(payload).subscribe(data=>{
      // console.log(data)
    })
  }

}
