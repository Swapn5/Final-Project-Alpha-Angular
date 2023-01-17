import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Address } from 'src/app/pojo/address';
import { CarInfo } from 'src/app/pojo/car-info';
import { Customer } from 'src/app/pojo/customer';
import { Guarantor } from 'src/app/pojo/guarantor';
import { LoanDetails } from 'src/app/pojo/loan-details';
import { Profession } from 'src/app/pojo/profession';
import { CustomerService } from 'src/app/shared/customer.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  customer : Customer = new Customer();



  adr : Address = new Address();
	prf:Profession = new Profession();
	ld:LoanDetails = new LoanDetails() ;
	guar:Guarantor = new Guarantor();
	ci:CarInfo = new CarInfo();

  reactiveForm: FormGroup;

  constructor(private cs : CustomerService, private router :Router) { }

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({

      cname: new FormControl('', Validators.required),
      birthDate: new FormControl('', [Validators.required]),
      gender: new FormControl('', Validators.required),
      maritalStatus: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      mobile: new FormControl('', Validators.required),
      pan: new FormControl('', Validators.required),
      adhar: new FormControl('', Validators.required),
      loanAmount: new FormControl('', Validators.required),
      area: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      district: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      pincode: new FormControl('', Validators.required),
      ptype: new FormControl('', Validators.required),
      companyName: new FormControl('', Validators.required),
      desig: new FormControl('', Validators.required),
      mIncome: new FormControl('', Validators.required),
      expAmount: new FormControl('', Validators.required),
      expTenure: new FormControl('', Validators.required),
      bankName: new FormControl('', Validators.required),
      accNo: new FormControl('', Validators.required),
      gname: new FormControl('', Validators.required),
      relation: new FormControl('', Validators.required),
      gmobile: new FormControl('', Validators.required),
      gdesig: new FormControl('', Validators.required),
      modelType: new FormControl('', Validators.required),
      regNo: new FormControl('', Validators.required),
      purchaseDate: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
    });
  }


  public saveCustomerData(customer:Customer){

    this.customer.address=this.adr;
    this.customer.proff=this.prf;
    this.customer.loan=this.ld;
    this.customer.guarantor=this.guar;
    this.customer.car=this.ci;
  
    this.cs.saveCustomerData(customer).subscribe();
    
    this.router.navigate(['modules/re/uploaddocs']);
  }

}
