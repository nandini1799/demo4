import { CompileShallowModuleMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { CrudService } from './crud.service';
import { MavenApiService } from './maven-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
//   template: `
//   <form #frm="ngForm" (ngSubmit)="add(frm)">
// Number1: <input type="number" name = "n1" ngModel/><br/>
// Number2: <input type="number" name = "n2" ngModel/><br/>
// <input type="submit" value="add"/>
// </form>
//   `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // demo:Array<any>=[];
  title = 'serviceAPI';
  constructor(private crudServe: CrudService) { }
  // res:string = "";
  // constructor(private maven: MavenApiService, public router:Router) { }

  // add(frm){
  //   // console.log(frm.value.n1)
  //   // console.log(frm.value.n2)
  //   // alert(frm);
  //   this.maven.addition(frm.value.n1, frm.value.n2)//.subscribe((data:{})=>console.log(data))
  // }



  ngOnInit(): void {
    // this.crudServe.showTask().subscribe(data=>console.log(data));
    // this.crudServe.showTask().subscribe(data=>this.demo.push(data));
  }

}
