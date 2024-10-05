import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  apiURL = `https://jsonplaceholder.typicode.com`;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient) { }
  //OBTENER POR ID
  getPost(id: number):Observable<any>{
    return this.http.get(this.apiURL+'/todos/'+id).pipe(retry(3));
  }

  //MODIFICAR
  // updatePost(id: number,post: any):Observable<any>{
  //   return this.http.put(this.apiURL+'/todos/'+id,post,this.httpOptions).pipe(retry(3));
  // }
  updatePost(id: number):Observable<any>{
    return this.http.put(this.apiURL+'/todos/'+id,this.httpOptions).pipe(retry(3));
  }

  // getPosts():Observable<any>{
  //    return this.http.get(this.apiURL+'/todos/').pipe(
  //    retry(3)
  // );}
  
  
  //CREAR
  createPost(post: any):Observable<any>{
    return this.http.post(this.apiURL+'/posts/',post,this.httpOptions).pipe(
    retry(3));
  }
}
