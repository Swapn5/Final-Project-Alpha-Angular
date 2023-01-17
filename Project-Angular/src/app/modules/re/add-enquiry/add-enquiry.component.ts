import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Enquiry } from 'src/app/pojo/enquiry';
import { CustomerService } from 'src/app/shared/customer.service';

@Component({
  selector: 'app-add-enquiry',
  templateUrl: './add-enquiry.component.html',
  styleUrls: ['./add-enquiry.component.css']
})
export class AddEnquiryComponent implements OnInit {

  enq: Enquiry = new Enquiry();
  @ViewChild('reactiveForm') form : NgForm 
  enq1: Enquiry;

  constructor(private cs: CustomerService, private router: Router) { }
  reactiveForm: FormGroup;

  ngOnInit(): void {

    this.reactiveForm = new FormGroup({

      customername: new FormControl('', Validators.required),
      pancard: new FormControl('', [Validators.required, Validators.maxLength(10),Validators.minLength(10)]),
      mobilenumber: new FormControl('', [Validators.required, Validators.maxLength(10),Validators.minLength(10)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      age: new FormControl('', [Validators.required,Validators.min(18)]),

    });

    
  }

  saveEnquiry(enq: Enquiry) {
    this.cs.saveEnquiry(enq).subscribe();
    setTimeout(() => {this.routing()},500*1)
  }

  routing(){
    this.router.navigate(['modules/re/viewenquiry']);
  }
}
