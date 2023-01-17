import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/pojo/customer';
import { CustomerService } from 'src/app/shared/customer.service';

@Component({
  selector: 'app-cm',
  templateUrl: './cm.component.html',
  styleUrls: ['./cm.component.css']
})
export class CmComponent implements OnInit {

  customer: Customer[];
  constructor(private cs:CustomerService) { }
    
  ngOnInit(): void {
   
  }

}
