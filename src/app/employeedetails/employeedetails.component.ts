import { Component, OnInit } from '@angular/core';

import { RouterModule, Router } from '@angular/router'

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {

  constructor(private router: Router) { }

  emp = history.state.data

  ngOnInit() {
    if(this.emp == null || this.emp == undefined){
      this.router.navigateByUrl("/employees")
    }
  }
  
  
}
