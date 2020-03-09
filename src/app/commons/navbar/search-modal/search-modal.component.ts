import {Component, Input, OnInit} from '@angular/core';
import {SaleService} from '../../../Services/sale.service';
import {AuthService} from '../../../Services/auth.service';
import {ProductService} from '../../../Services/product.service';

@Component({
  selector: 'app-search-modal',
  templateUrl: './search-modal.component.html'
})
export class SearchModalComponent implements OnInit {

  @Input() searchTerm: any;
  products: any;

  constructor(private productService:ProductService) {

  }
  ngOnInit(): void {

    this.productService.getProductList().subscribe(data=>{
      this.products=data
    })
    // console.log(this.products)
  }

}
