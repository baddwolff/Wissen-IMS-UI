import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productList:any=[
    {"id":1,"productId":1,"productName":"name1","productCompany":"company1","costPrice":100.0,"amount":100},
    {"id":2,"productId":2,"productName":"name2","productCompany":"company2","costPrice":120.0,"amount":90},
    {"id":4,"productId":4,"productName":"name4","productCompany":"company4","costPrice":90.0,"amount":1}
  ]
  constructor(private http:HttpClient) { }

  private handleError<T>(operation='operation',result?:T){
    return(error:any):Observable<T>=>{
      console.log(error)
      return of(result as T)
    }
  }

  getProductList():Observable<any>{
    return this.http.get<any>('/api/v1/productList')
      .pipe(catchError(this.handleError<any>('getProductList')))
  }


  getProductByID(productID: number) {
    return this.http.get<any>('/api/v1/findProduct/'+productID)
      .pipe(catchError(this.handleError<any>('getProductByID')))
  }

  addProduct(payload) {
    let options={headers:new HttpHeaders({'Content-Type':'application/json'})}
    return this.http.post<any>('api/v1/addProduct',payload,options)
      .pipe(catchError(this.handleError<any>('addProduct')))
  }

  findProducts(searchTerm: any) {
    return this.productList.filter(product=>product.productName.toLocaleLowerCase().indexOf(searchTerm)>-1);
  }

}
