import {Injectable} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, Resolve, Router} from '@angular/router';
import {ProductService} from '../../Services/product.service';
import {map} from 'rxjs/operators';


@Injectable()
export class ProductListResolver implements Resolve<any>{

  constructor (private productService:ProductService,private router:Router){
  }

  resolve(route:ActivatedRouteSnapshot){

    return this.productService.getProductList()

  }

}
