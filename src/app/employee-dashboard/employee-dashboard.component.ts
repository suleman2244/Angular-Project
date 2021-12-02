import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { EmployeeDashboardModal } from './employee_dashboard.modal';
import { ApiService } from '../shared/api.service';
@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {

  formValue !: FormGroup;
  employeeModalObj:EmployeeDashboardModal=new EmployeeDashboardModal();
  employeeData !: any;
  showAdd !: boolean;
  showUpdate !: boolean;
  constructor( private formbuilder:FormBuilder,private api: ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      mobile: [''],
      salary: [''],
    });

this.getEmployee();
  }
  clickAddEmployee(){
    this.formValue.reset();
    this.showAdd=true;
    this.showUpdate=false;
  }
  postEmployeeDetail(){
    this.employeeModalObj.firstName=this.formValue.value.firstName;
    this.employeeModalObj.lastName=this.formValue.value.lastName;
    this.employeeModalObj.email=this.formValue.value.email;
    this.employeeModalObj.mobile=this.formValue.value.mobile;
    this.employeeModalObj.salary=this.formValue.value.salary;


    this.api.postEmployee(this.employeeModalObj)
    .subscribe(res=>{
      console.log(res);
      alert("Employee Added Successfully");
      let ref=document.getElementById('cancel');
      ref?.click();
      this.formValue.reset();
      this.getEmployee();

    },err=>{
      alert("Employee Added Failed");
    })



   }
getEmployee(){
  this.api.getEmployee()
  .subscribe(res=>{
    this.employeeData=res;
  })
}
DeleteEmployee(row:any){
  this.api.deleteEmployee(row.id)
  .subscribe(res=>{
    alert("Employee Deleted Successfully");
    this.getEmployee();

  })
}

onEdit(row:any){
  this.showAdd=false;
    this.showUpdate=true;
  this.employeeModalObj.id=row.id;
  this.formValue.controls['firstName'].setValue(row.firstName);
  this.formValue.controls['lastName'].setValue(row.lastName);
  this.formValue.controls['email'].setValue(row.email);
  this.formValue.controls['mobile'].setValue(row.mobile);
  this.formValue.controls['salary'].setValue(row.salary);
}

updateEmployeeDetail(){
  this.employeeModalObj.firstName=this.formValue.value.firstName;
  this.employeeModalObj.lastName=this.formValue.value.lastName;
  this.employeeModalObj.email=this.formValue.value.email;
  this.employeeModalObj.mobile=this.formValue.value.mobile;
  this.employeeModalObj.salary=this.formValue.value.salary;
  this.api.updateEmployee(this.employeeModalObj,this.employeeModalObj.id)
  .subscribe(res=>{
    alert("Employee Updated Successfully");
    let ref=document.getElementById('cancel');
    ref?.click();
    this.formValue.reset();
    this.getEmployee();

  })

}

}
