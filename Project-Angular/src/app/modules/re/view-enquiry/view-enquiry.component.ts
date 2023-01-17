import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Enquiry } from 'src/app/pojo/enquiry';
import { CustomerService } from 'src/app/shared/customer.service';

@Component({
  selector: 'app-view-enquiry',
  templateUrl: './view-enquiry.component.html',
  styleUrls: ['./view-enquiry.component.css']
})
export class ViewEnquiryComponent implements OnInit {

  
  enq: Enquiry[];
  constructor(private cs: CustomerService , private router:Router) { }

  ngOnInit(): void {
    this.getAllEnquiry();
  }

  getAllEnquiry() {
    this.cs.getAllEnquiry().subscribe(data => {
      this.enq = data;
    });
  }

  deleteEnquiry(id:number){
    this.cs.deleteEnquiry(id).subscribe();
    window.location.reload();
  }

  navigateToRegister(id:number){
    this.cs.changeEnqStatus(id).subscribe();
    this.router.navigate(['modules/re/register']);
  }


}
