import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from 'src/app/rest-api.service';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {
  // @Input() employeeDetails = {name:'', email:'', phone:''}
  // constructor(public restApi: RestApiService, public router:Router) { }
  // ngOnInit() {
    
  // }
  // addEmployee(){
  //   this.restApi.createEmployee(this.employeeDetails).subscribe((data:{})=>{
  //     this.router.navigate(['/empList'])
  //   })
  // }

  // java api example


  @Input() employeeDetails = {EmployeeId:'', employeeName:'', EmployeeSalary:''}
  constructor(public restApi: RestApiService, public router:Router) { }
  ngOnInit() {
    
  }
  addEmployee(){
    this.restApi.createEmployee(this.employeeDetails).subscribe((data:{})=>{
      this.router.navigate(['/empList'])
    })
  }

}
