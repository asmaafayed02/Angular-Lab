import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  constructor(private http: HttpClient) { }
  url="http://localhost:4000/register"
  enrollment(user: User){
    return this.http.post(this.url,user)
  }
}
