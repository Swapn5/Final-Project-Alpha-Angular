import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'src/app/pojo/employee';
import { EmployeeService } from 'src/app/shared/employee.service';


@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  emp: Employee = new Employee();
  profile : File;
  constructor(public es: EmployeeService, private router:Router) { }

  reactiveForm : FormGroup;

  ngOnInit(): void {

    this.reactiveForm = new FormGroup({
      firstName : new FormControl('', Validators.required),
      lastName : new FormControl('', Validators.required),
      email : new FormControl('', [Validators.required, Validators.email]),
      password : new FormControl('', Validators.required),
      gender : new FormControl('', Validators.required),
      role : new FormControl('', Validators.required),
      birthDate : new FormControl('', Validators.required),
      profile : new FormControl('', Validators.required),

    });

  }

  onchange(event:any){
    this.profile=event.target.files[0];
  }

  saveEmployee(emp: Employee) {
    this.es.saveEmployee(this.emp).subscribe();
    const up = new FormData();
    up.append('profile', this.profile,this.profile.name);
    this.es.savedocs(up).subscribe();
    alert("Employee Succesfully");
    setTimeout(() => {this.navigateBack()},500*1)
  }

  navigateBack(){
    this.router.navigate(['modules/admin']);
  }
}
