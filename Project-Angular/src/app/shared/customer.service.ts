import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Address } from '../pojo/address';
import { CarInfo } from '../pojo/car-info';
import { Customer } from '../pojo/customer';
import { Enquiry } from '../pojo/enquiry';
import { Guarantor } from '../pojo/guarantor';
import { LoanDetails } from '../pojo/loan-details';
import { Profession } from '../pojo/profession';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  public url : string = "http://localhost:9021/REAPI/saveCustomerData";
  public url2: string = 'http://localhost:9011/enquiry/saveEnquiry';
  public url3: string = "http://localhost:9011/enquiry/cibilScore";
  public url4: string = "http://localhost:9011/enquiry/statusChange";

  public urlEnq: string = "http://localhost:9011/enquiry";
  public urlRe: string = "http://localhost:9021/REAPI";
  public urlOe: string = "http://localhost:9031/OEAPI";
  public urlCm: string = "http://localhost:9033/credit";
  public urlEmail: string = "http://localhost:9033/email";
  public urlAh: string = "http://localhost:9041/ahead";

  constructor(private http : HttpClient) { }

    customer : Customer = {
    cid: 0,
    cname: '',
    birthDate: '',
    gender: '',
    maritalStatus: '',
    loanAmount: 0,
    email: '',
    mobile: 0,
    pan: '',
    adhar: '',
    documentStatus: '',
    address: new Address,
    proff: new Profession,
    loan: new LoanDetails,
    guarantor: new Guarantor,
    car: new CarInfo,
  }

  address : Address = {
    area:'',
	  city:'',
	  district:'',
	  state:'',
	  pincode:0
  }

  proff : Profession = {
    ptype:'',
	  companyName:'',
	  desig:'',
	  mincome:0
  }

  loan : LoanDetails = {
    sanctionId: 0,
    expAmount: 0,
    expTenure: 0,
    bankName: '',
    accNo: 0,
    lstatus: '',
    sanctionAmount: 0,
    rateOfInt: 0
  }

  gurantor : Guarantor = {
    gname:'',
	  relation:'',
	  mobile:0,
	  desig:''
  }

  car : CarInfo = {
    regNo:'',
    modelType:'',
    purchaseDate:'',
    price:0
  }

  enq: Enquiry = {
    custId: 0,
    customerName: '',
    pancardNumber: '',
    customerMobileNumber: 0,
    customerEmailId: '',
    age: '',
    enquiryStatus: '',
    cibil: undefined
  }

  setCustomerObj(c:Customer){
    this.customer=c;
  }

  getCustomerObj():Customer{
    return this.customer;
  }


  saveEnquiry(enq: Enquiry): Observable<Enquiry> {
    return this.http.post<Enquiry>(`${this.urlRe}/saveEnquiry`, enq);
  }

  getAllEnquiry(): Observable<Enquiry[]> {
    return this.http.get<Enquiry[]>(`${this.urlEnq}/enquiryList`);
  }

  deleteEnquiry(id:number):Observable<any>{
    return  this.http.delete<any>(`${this.urlRe}/deleteEnquiry/${id}`)
  }

  getCibil(id:number) : Observable<any> {
    return this.http.get<any>(`${this.urlOe}/cibilScore/${id}`);
  }

  changeEnqStatus(id:number) : Observable<any> {
    return this.http.get<any>(`${this.urlEnq}/statusChange/${id}`);
  }

  enqRejectionEmail(id:number) : Observable<any>{
    return this.http.get<any>(`${this.urlEmail}/enqRejectionEmail/${id}`)
  }

  public saveCustomerData(customer : Customer) : any {
    return this.http.post(`${this.urlRe}/saveCustomerData`, customer,{responseType:'text'});
  }

  savedocs(up: FormData): Observable<File> {
    return this.http.post<File>(`${this.urlRe}/uploadDocuments`, up);
  }

  getAllCustomer():Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.urlCm}/customerList`);
  }

  getDocs(id:number): Observable<any>{
    return this.http.get<Document[]>(`${this.urlCm}/getDocuments/${id}`);
  }

  changeLoanStatus(id:number):Observable<any>{
    return this.http.get<any>(`${this.urlRe}/changeStatus/${id}`);
  }

  rejectLoan(id:number):Observable<any>{
    return this.http.get<any>(`${this.urlEmail}/loanRejectionEmail/${id}`)
  }

  FailedStatus(id:number):Observable<any>{
    return this.http.get<any>(`${this.urlRe}/appRejection/${id}`)
  }

  
  getVerifiedList():Observable<any> {
    return this.http.get<any>(`${this.urlAh}/verifiedList`);
  }

  approveLoan(id:number):Observable<any> {
    console.log(id);
    return this.http.get<any>(`${this.urlEmail}/loanApprovalEmail/${id}`)

  }

  sanctionLoan(customer:Customer):Observable<any>{
    return this.http.put(`${this.urlAh}/sanction`,customer);
  }

}
