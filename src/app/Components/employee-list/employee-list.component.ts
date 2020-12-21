import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/employee.model';
import { RestApiService } from 'src/app/rest-api.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  Employee: any = []
  constructor(private restApi: RestApiService, public router:Router) { }

  ngOnInit() {
    this.loadEmp();
  }
  loadEmp() {
    this.restApi.getEmployees()
      .subscribe((data: {}) => {
        console.log(data);
        this.Employee = data;
      }
      )
  }
  deleteEmp(id){
    this.restApi.deleteEmployee(id).subscribe((data:{})=>this.router.navigate(['/empList']));
  }


}
