import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CrudService {
  apiUrl: string = "https://jsonplaceholder.typicode.com/posts/1/comments";
  headers = new HttpHeaders().set('Content-Type', 'application/json');
 
  constructor(private http: HttpClient) { }
  showTask(){
    return this.http.get(`${this.apiUrl}`);
  }
}
