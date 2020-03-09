import {Injectable} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, Resolve, Router} from '@angular/router';
import {ProductService} from '../../Services/product.service';
import {OrderService} from '../../Services/order.service';
import {SaleService} from '../../Services/sale.service';


@Injectable()
export class SalesListResolver implements Resolve<any>{

  constructor (private salesService:SaleService,private router:Router){
  }

  resolve(route:ActivatedRouteSnapshot){

    let data=this.salesService.getHistory()
    if(data==undefined){
      this.router.navigate(['/home/404'])
    }
    return data
  }

}
