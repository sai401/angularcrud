import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  gender="male";
  department=1;
  departments:Department[]=[
    {id:1,name:"HR"},
    {id:2,name:"Help Desk"},
    {id:3,name:"Pay Roll"},
    {id:4,name:"IT"}
  ];
  constructor() { }

  ngOnInit() {
  }

  createEmployee(empForm: NgForm): void {
    console.log(empForm.value);
  }
}
