import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'src/app/pojo/customer';
import { CustomerService } from 'src/app/shared/customer.service';

@Component({
  selector: 'app-sanction',
  templateUrl: './sanction.component.html',
  styleUrls: ['./sanction.component.css']
})
export class SanctionComponent implements OnInit {

  reactiveForm:FormGroup;
  customer:Customer;
   



  constructor(public fb:FormBuilder,public cs:CustomerService, private router: Router) {

   }

  ngOnInit(): void {

    this.customer=this.cs.getCustomerObj();
    //setTimeout(() => {this.ngOnInit()},100*1)
      
    
    this.reactiveForm=this.fb.group(
      {  sanctionId:[Validators.required],
        rateOfInt:[Validators.required],
        expTenure:[Validators.required],
        expAmount:[Validators.required],
        bankName:[Validators.required],
        accNo:[Validators.required],
        sanctionAmount:[Validators.required],
      })
  }

  sanction(c:Customer){
    this.sanctionStatus(c);
    this.approveLoan(c.cid);
  }


  sanctionStatus(c:Customer){
    this.cs.sanctionLoan(c).subscribe();
    setTimeout(() => {this.navigateBack()},1000*1)
  }

  approveLoan(id:number){
    this.cs.approveLoan(id).subscribe();
  }

  navigateBack(){
    alert('Sanctioned Successfully');
    this.router.navigate(['modules/ah/viewapp']);
  }
}
