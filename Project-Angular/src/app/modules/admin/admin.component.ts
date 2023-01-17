import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/pojo/employee';
import { EmployeeService } from 'src/app/shared/employee.service';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit  {

  emp : Employee[] ;
 
  constructor(private router:Router , private es:EmployeeService) { }

  ngOnInit(): void {
      this.es.getEmployeeList().subscribe(data => {
      this.emp=data;
    });
  }


  deleteEmployee(eid: string) {

    this.es.deleteEmployee(eid).subscribe();
    this.es.deleteEmpPhoto(eid).subscribe();
    window.location.reload();
  }

  navigateToAddEmployee() {
    this.router.navigate(['modules/admin/addemployee'])
  }
}

