import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  //this is example using json server
  // apiUrl = "http://localhost:3000";
  // headers = new HttpHeaders().set('Content-Type', 'application/json');

  // constructor(private http:HttpClient) { }

  // getEmployees():Observable<Employee>{
  //   return this.http.get<Employee>(this.apiUrl+'/employees');
  // }
  // getEmployeeById(id:number):Observable<Employee>{
  //   return this.http.get<Employee>(this.apiUrl+'/employees/'+id);
  // }
  // createEmployee(employee):Observable<Employee>{
  //   return this.http.post<Employee>(this.apiUrl+"/employees", employee);
  // }
  // updateEmployee(id, employee):Observable<Employee>{
  //   return this.http.put<Employee>(this.apiUrl+"/employees/"+id, employee)
  // }
  // deleteEmployee(id):Observable<Employee>{
  //   return this.http.delete<Employee>(this.apiUrl+'/employees/'+id)
  // }


// this is example using java restApi and java server


  apiUrl = "http://localhost:8080/RestEmployee";
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http:HttpClient) { }

  getEmployees():Observable<Employee>{
    return this.http.get<Employee>(this.apiUrl+'/rest/employees');
  }
  getEmployeeById(id:number):Observable<Employee>{
    return this.http.get<Employee>(this.apiUrl+'/employees/'+id);
  }
  createEmployee(employee):Observable<Employee>{
    return this.http.post<Employee>(this.apiUrl+"/rest/employees", employee);
  }
  updateEmployee(id, employee):Observable<Employee>{
    return this.http.put<Employee>(this.apiUrl+"/employees/"+id, employee)
  }
  deleteEmployee(id){
    console.log(id);
    return this.http.post(this.apiUrl+"/rest/empDelete",id)
  }
}
