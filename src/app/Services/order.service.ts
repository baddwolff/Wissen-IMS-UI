import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private orderHistory:any
  private emptycart:any={
    "entries":
      [],
    "total":0,
    "seller":""
  }
  private orderCart:any= {
    "seller":"",
  "entries":
    [
    ],
  "total":0,
}
  constructor(private http:HttpClient) {
    this.orderHistory=[
      {
        "id":1,
        "entries":[
          {"id":1,"productId":1,"productName":"name1","productCompany":"company1","costPrice":100.0,"amount":100},
          {"id":2,"productId":2,"productName":"name2","productCompany":"company2","costPrice":100.0,"amount":100}
        ],
        "total":20000.0,
        "seller":"test"
      },
      {"id":2,
        "entries":[
          {"id":1,"productId":4,"productName":"name111","productCompany":"company1","costPrice":1000.0,"amount":100},
          {"id":2,"productId":5,"productName":"name12","productCompany":"company21","costPrice":1001.0,"amount":500}
        ],
        "total":20000.0,
        "seller":"test1"
      }
    ]
  }

  getCart(){
    return this.orderCart;
  }
  private handleError<T>(operation='operation',result?:T){
    return(error:any):Observable<T>=>{
      console.log(error)
      return of(result as T)
    }
  }

  incrementAmount(productId: number) {
    this.orderCart.entries.forEach(item=>{
      if(item.id==productId){
        item.amount+=1
        this.orderCart.total+=item.price
      }
    })
  }

  decrementAmount(productId: number) {
    this.orderCart.entries.forEach(item=>{
      if(item.id==productId){
        if(item.amount<=1){
          this.deleteProduct(productId)
        }
        else {
          item.amount-=1
          this.orderCart.total-=item.price
        }
      }
    })

  }

  deleteProduct(productId: any) {
    this.orderCart.entries=this.orderCart.entries.filter(item=>{
      if(item.id==productId){
        this.orderCart.total-=(item.price*item.amount)
        return false
      }
      return true
    })
  }

  addProduct(payload) {
    this.orderCart.entries.push(payload)
    this.orderCart.total+=payload.price*payload.amount
  }

  getHistory() {
    return this.http.get<any>('/api/v1/ordersHistory')
      .pipe(catchError(this.handleError<any>('ordersHistory')))
  }

  checkOut(formValues: any) {
    let options={headers:new HttpHeaders({'Content-Type':'application/json'})}
    let payload= {"entries":[],
      "total":formValues.total,
      "seller":formValues.seller
    }
    formValues.entries.forEach(item=>{
      let instance={
        productId:item.id,
        productName:item.name,
        productCompany:item.company,
        costPrice:item.price,
        amount:item.amount
      }
      payload.entries.push(instance)
    })
    return this.http.post<any>('api/v1/placeOrder',payload,options)
      .pipe(catchError(this.handleError<any>('salesCheckOut')))
  }

  getOrderByID(id: number) {
    return this.http.get<any>('/api/v1/findProduct/'+id)
      .pipe(catchError(this.handleError<any>('getProductByID')))
  }

  clearCart() {
    this.orderCart=this.emptycart
    // console.log(this.orderCart)
    return
  }
}
