import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { EditemployeeComponent } from './editemployee/editemployee.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddemployeeComponent,
    EmployeelistComponent,
    EditemployeeComponent,
    EmployeedetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'employees', component:EmployeelistComponent},
      {path:'addEmployee', component:AddemployeeComponent},
      {path:'editEmployee', component:EditemployeeComponent},
      {path:'details', component:EmployeedetailsComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
