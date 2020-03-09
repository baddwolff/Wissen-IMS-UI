import {Injectable} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, Resolve, Router} from '@angular/router';
import {ProductService} from '../../Services/product.service';


@Injectable()
export class ProductResolver implements Resolve<any>{

  constructor (private productService:ProductService,private router:Router){
  }

  resolve(route:ActivatedRouteSnapshot){
    // console.log(+route.params['id'])
      let data=this.productService.getProductByID(+route.params['id'])
      if(data==undefined){
        this.router.navigate(['/home/404'])
      }
      return data
  }

}
