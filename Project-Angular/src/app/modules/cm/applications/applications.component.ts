import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/pojo/customer';
import { Documents } from 'src/app/pojo/documents';
import { CustomerService } from 'src/app/shared/customer.service';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent implements OnInit {

  flag:boolean=false;
  customer: Customer[];
  docs: Documents = {
    cid: 0,
    panCard: [],
    photo: [],
    adharCard: [],
    salarySlips: [],
    bankStatement: [],
    addressProof: []
  }
  constructor(private cs: CustomerService) { }

  ngOnInit(): void {
    this.cs.getAllCustomer().subscribe(data => {
      this.customer = data;
    });
  }

  getdocs(id: number) {
    this.cs.getDocs(id).subscribe((d: Documents) => {
      this.docs = d;
    });
  }

  changeLoanStatus(id:number){
    this.cs.changeLoanStatus(id).subscribe();
    window.location.reload();
  }


  reject(id:number){
    this.FailedStatus(id);
    this.rejectLoan(id);
    window.location.reload();
  }

  FailedStatus(id:number){
    this.cs.FailedStatus(id).subscribe();
  }

  rejectLoan(id:number){
    this.cs.rejectLoan(id).subscribe();
  }

  m1(lstatus : string){
    if(lstatus=='Pending')
      this.flag=true;
    if(lstatus=='Verified')
      this.flag=false;
    if(lstatus=='Failed')
      this.flag=false;
    if(lstatus=='Sanctioned')
      this.flag=false;
  }
}
