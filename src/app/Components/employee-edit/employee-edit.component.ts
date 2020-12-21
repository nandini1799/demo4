import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestApiService } from 'src/app/rest-api.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  id = this.actRoute.snapshot.params['id'];
  employeeData: any = {};
  constructor(public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router) { }

  ngOnInit() {
    this.restApi.getEmployeeById(this.id).subscribe((data: {}) => {
      this.employeeData = data;
    })
  }
  updateEmployee() {
    if(window.confirm('Are you sure, you want to update?')){
      this.restApi.updateEmployee(this.id, this.employeeData).subscribe(data => {
        this.router.navigate(['/empList'])
      })
    }
  }

}
