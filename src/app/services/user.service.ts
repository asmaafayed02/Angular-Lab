import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../Shared Classes and types/iusers';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }
  url:string = 'https://jsonplaceholder.typicode.com/users'
  getUsers():Observable<IUser[]> {
    return this.http.get<IUser[]>(this.url).pipe(catchError((err) => {
      console.log(err);
      
      return throwError(()=>{return err.message || 'server error'})
    }))
  }
}
