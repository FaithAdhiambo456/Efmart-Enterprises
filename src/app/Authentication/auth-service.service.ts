import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
http: HttpClient = inject(HttpClient);
  constructor() { }
  signup(email: any, password: any){
    const data = {email: email, password:password, returnSecureToken: true}
   return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDb-oAaEdwNtKm7rqVxWRGWSyUv-IdzwZI', data) 
  }
}
