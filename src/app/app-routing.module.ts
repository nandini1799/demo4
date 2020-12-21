import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeCreateComponent } from './Components/employee-create/employee-create.component';
import { EmployeeEditComponent } from './Components/employee-edit/employee-edit.component';
import { EmployeeListComponent } from './Components/employee-list/employee-list.component';


const routes: Routes = [
  {path: "empCreate", component:EmployeeCreateComponent},
  {path: "empEdit/:id", component:EmployeeEditComponent},
  {path: "empList", component:EmployeeListComponent},
  // {path: "**", component:EmployeeListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
