import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginUser } from '../login-user';

@Injectable({
  providedIn: 'root'
})
export class EnrollloginService {

  constructor(private http: HttpClient) { }
  url='http://localhost:4000/login'
  enrolllogin(loginUser:LoginUser) {
    return this.http.post(this.url, loginUser)
  }
}
