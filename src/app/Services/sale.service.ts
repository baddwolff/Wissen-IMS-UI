import { Injectable } from '@angular/core';

import {Observable, of, Subject} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  private salesCartSubject = new Subject<any>();
  private salesCart:any
  private salesHistory:any

  cartSize: number;
  private cartSizeSubject


  private emptycart:any={
    "entries":
      [],
    "total":0,
  }
  constructor(private http:HttpClient) {
  this.salesHistory=[
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
  this.salesCart= {
      "entries":
        [
        ],
      "total":0,
      "buyer":""
    }
    this.cartSize=this.salesCart.entries.length
    this.cartSizeSubject = new Subject<any>()

  }
  private handleError<T>(operation='operation',result?:T){
    return(error:any):Observable<T>=>{
      console.log(error)
      return of(result as T)
    }
  }

  cartIncrement(){
    this.cartSize+=1;
    this.updateCartSizeSubject()
  }

  cartDecrement(){
    this.cartSize-=1;
    this.updateCartSizeSubject()
  }

  updateCartSizeSubject():Observable<number>{
    this.cartSizeSubject.next(this.cartSize);
    return this.cartSizeSubject.asObservable();
  }

  getCart():Observable<any>{
    return this.salesCart
    this.updateCartSizeSubject()
  }

  incrementAmount(productId: number) {
    this.salesCart.entries.forEach(item=>{
      // console.log(item,productId)
      if(item.id==productId){
        // console.log(item)
        item.amount+=1
        this.salesCart.total+=item.price
      }
    })
  }

  decrementAmount(productId: number) {
    this.salesCart.entries.forEach(item=>{
      if(item.id==productId){
        if(item.amount<=1){
          this.deleteProduct(productId)
        }
        else {
          item.amount-=1
          this.salesCart.total-=item.price
        }
      }
    })

  }

  deleteProduct(productId: any) {
    this.salesCart.entries=this.salesCart.entries.filter(item=>{
      if(item.id==productId){
        this.salesCart.total-=(item.price*item.amount)
        return false
      }
      return true
    })
    this.cartDecrement()
  }

  addProduct(payload) {

    payload.amount=parseInt(payload.amount)
    // console.log(payload)
    this.salesCart.entries.push(payload)
    this.salesCart.total+=payload.price*payload.amount
    this.cartIncrement()
  }

  productInCart(productId: number) {
    return this.salesCart.entries.find(item=>{
      if(item.id==productId){
        return true;
      }
    })
    return false
  }

  getAmount(productId: number) {
    let res=this.salesCart.entries.find(item=>{
      if(item.id==productId){
        return item.amount
      }
    })
    return res.amount
  }

  getHistory(){
    return this.http.get<any>('/api/v1/salesHistory')
      .pipe(catchError(this.handleError<any>('ordersHistory')))
  }

  checkOut(formValues: any) {
    let options={headers:new HttpHeaders({'Content-Type':'application/json'})}
    let payload= {"entries":[],
        "total":formValues.total,
        "buyer":formValues.seller
      }
      formValues.entries.forEach(item=>{
        let instance={
          productId:item.id,
          productName:item.name,
          productCompany:item.company,
          sellingPrice:item.price,
          amount:item.amount
        }
        payload.entries.push(instance)
      })
    return this.http.post<any>('api/v1/performSale',payload,options)
      .pipe(catchError(this.handleError<any>('salesCheckOut')))
  }
  clearCart() {
    this.salesCart=this.emptycart
    // console.log(this.orderCart)
    return
  }

  getSaleByID(id: number) {
    return this.salesHistory.find(item=>{
      if(item.id==id){
        return item
      }
    })
  }
}
