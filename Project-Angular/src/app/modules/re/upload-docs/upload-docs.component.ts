import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/shared/customer.service';

@Component({
  selector: 'app-upload-docs',
  templateUrl: './upload-docs.component.html',
  styleUrls: ['./upload-docs.component.css']
})
export class UploadDocsComponent implements OnInit {

  constructor(private cs:CustomerService , private router:Router) { }
  photo: File;
  adharcard: File;
  pancard: File;
  salaryslip: File;
  bankstatement: File;
  addressproof: File;


  ngOnInit(): void {
  }

  onFileChanged1(event: any) {
    this.photo = event.target.files[0];
  }

  onFileChanged2(event: any) {
    this.adharcard = event.target.files[0];
   }

  onFileChanged3(event: any) {
    this.pancard = event.target.files[0];
   }

  onFileChanged4(event: any) {
    this.salaryslip = event.target.files[0];
   }

  onFileChanged5(event: any) {
    this.bankstatement = event.target.files[0];
   }

  onFileChanged6(event: any) {
    this.addressproof = event.target.files[0];
  }

  onUpload() {

    const up = new FormData();
    up.append('f1', this.photo, this.photo.name);
    up.append('f2', this.adharcard, this.adharcard.name);
    up.append('f3', this.pancard, this.pancard.name);
    up.append('f4', this.salaryslip, this.salaryslip.name);
    up.append('f5', this.bankstatement, this.bankstatement.name);
    up.append('f6', this.addressproof, this.addressproof.name);
    this.cs.savedocs(up).subscribe();
    alert("Applicant Registerd Succesfully");
    this.router.navigate(['modules/re/viewenquiry'])
    
  }

}
