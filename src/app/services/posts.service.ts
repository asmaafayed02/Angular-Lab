import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { IPosts } from '../Shared Classes and types/iPosts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(private http: HttpClient) { }
  postUrl: string='https://jsonplaceholder.typicode.com/posts'

  getPosts():Observable<IPosts[]> { return this.http.get<IPosts[]>(this.postUrl).pipe(catchError((error: any) => {
    return throwError(()=>{return error.message || 'server error'});
  }))}
}
