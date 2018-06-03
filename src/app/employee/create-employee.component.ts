import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  dateofBirth:Date=new Date(2018,4,3);
  datePickerBSConfig: Partial<BsDatepickerConfig>;
  gender = "male";
  department = 1;
  departments: Department[] = [
    { id: 1, name: "HR" },
    { id: 2, name: "Help Desk" },
    { id: 3, name: "Pay Roll" },
    { id: 4, name: "IT" }
  ];
  constructor() {
    this.datePickerBSConfig = Object.assign({},
      {
        containerClass: 'theme-red',
        minDate:new Date(2018,0,2),
        maxDate:new Date(2018,11,30),
        showWeekNumbers:false
      });
  }

  ngOnInit() {
  }

  createEmployee(empForm: NgForm): void {
    console.log(empForm.value);
  }
}
