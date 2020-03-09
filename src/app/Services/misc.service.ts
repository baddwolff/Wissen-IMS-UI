import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MiscService {
  private analytics:any;
  private notifications:any;
  constructor(private http:HttpClient) {
    this.analytics={
      capital:100000,
      sales:50000,
      expenditure:25000,
      capacity:34
    }
    this.notifications=[
      {type:"product",id:4},
      {type: "order",id:1},
      {type: "sales",id:2},
      {type: "product",id:2}
    ]
  }
  private handleError<T>(operation='operation',result?:T){
    return(error:any):Observable<T>=>{
      console.log(error)
      return of(result as T)
    }
  }

  provideAnalytics(){
    return this.http.get<any>('/api/v1/getAnalytics').pipe(catchError(this.handleError<any>('getAnalytics')))
  }
  provideNotifications(){
    return this.http.get<any>('/api/v1/getNotifications').pipe(catchError(this.handleError<any>('getNotifications')))
  }
}
