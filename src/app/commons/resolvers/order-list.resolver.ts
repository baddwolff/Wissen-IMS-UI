import {Injectable} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, Resolve, Router} from '@angular/router';
import {ProductService} from '../../Services/product.service';
import {OrderService} from '../../Services/order.service';


@Injectable()
export class OrderListResolver implements Resolve<any>{

  constructor (private orderService:OrderService,private router:Router){
  }

  resolve(route:ActivatedRouteSnapshot){

    let data=this.orderService.getHistory()
    if(data==undefined){
      this.router.navigate(['/home/404'])
    }
    return data
  }

}
