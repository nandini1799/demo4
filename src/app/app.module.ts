import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudService } from './crud.service';
import { JsonPipe } from '@angular/common';
import { EmployeeCreateComponent } from './Components/employee-create/employee-create.component';
import { EmployeeEditComponent } from './Components/employee-edit/employee-edit.component';
import { EmployeeListComponent } from './Components/employee-list/employee-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeCreateComponent,
    EmployeeEditComponent,
    EmployeeListComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
