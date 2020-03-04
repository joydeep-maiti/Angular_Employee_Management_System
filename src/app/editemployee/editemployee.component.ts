import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router'

@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.css']
})
export class EditemployeeComponent implements OnInit {

  constructor(private router: Router) { }

  emp = history.state.data

  ngOnInit() {
    if(this.emp == null || this.emp == undefined){
      this.router.navigateByUrl("/employees")
    }
  }

}
