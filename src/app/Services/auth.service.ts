import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser
  constructor(private router:Router,private http:HttpClient) { }

  private handleError<T>(operation='operation',result?:T){
    return(error:any):Observable<T>=>{
      console.log(error)
      return of(result as T)
    }
  }

  loginUser(username,password){
    let payload={
      username:username,
      password:password
    }
    let options={headers:new HttpHeaders({'Content-Type':'application/json'})}
    return this.http.post('/api/v1/authenticateUser',payload,options).pipe(catchError(this.handleError<any>('authenticateUser')))

  }
  logoutUser(){
    this.currentUser=undefined;
    alert("invalid authentication!!")
    this.router.navigate(['/login'])
  }
  isAuthenticated(){
    if(!this.currentUser){
      this.router.navigate(['login'])
    }
  }


  getUser() {
      return this.currentUser
  }
  redirectLogin(username) {
    this.currentUser=username
    this.router.navigate(['/home/dashboard']);
  }
}
