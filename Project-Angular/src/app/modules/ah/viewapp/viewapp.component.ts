import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/pojo/customer';
import { CustomerService } from 'src/app/shared/customer.service';

@Component({
  selector: 'app-viewapp',
  templateUrl: './viewapp.component.html',
  styleUrls: ['./viewapp.component.css']
})
export class ViewappComponent implements OnInit {

  customer: Customer[];
  
  constructor(private cs: CustomerService, private router:Router) { }

  ngOnInit(): void {    
    this.cs.getVerifiedList().subscribe(data => {
      this.customer = data;
    });
  }

  navigateToSanction(c:Customer){
    this.cs.setCustomerObj(c);
    this.router.navigate(['modules/ah/sanction'])
  }


}
