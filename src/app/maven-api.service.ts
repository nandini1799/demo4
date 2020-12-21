import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MavenApiService {
  apiUrl = "http://localhost:8080/additionService/abc/add";
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http:HttpClient) { }

  addition(n1:number,n2:number){
    console.log(n1)
    console.log(n2)
    console.log("URL: "+this.apiUrl+`/${n1}/${n2}`)
    console.log( this.http.get(this.apiUrl+`/${n1}/${n2}`));
  }
}
