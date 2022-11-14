import { DomElementSchemaRegistry } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { RouteConfigLoadStart, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees:Employee[]=[];
  constructor(private service:EmployeeService,private router:Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(){
    this.service.getEmployeeList().subscribe(data=>{
      this.employees=data;
    })
  }

  updateEmployee(id:number){
    this.router.navigate(['update-employee',id]);
  }

  deleteEmployee(id:number){
    this.service.deleteEmployee(id).subscribe(data=>{
      this.getEmployees();
    })
  }

}
