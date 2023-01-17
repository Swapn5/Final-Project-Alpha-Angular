import { Address } from "./address";
import { Guarantor } from "./guarantor";
import { CarInfo } from "./car-info";
import { LoanDetails } from "./loan-details";
import { Profession } from "./profession";

export class Customer {
	cid:number;
	cname:string;
	birthDate:string;
	gender:string;
	maritalStatus:string;
	loanAmount:number;
	email:string;
	mobile:number;
	pan:string;
	adhar:string;
    documentStatus:string;
	address:Address;
	proff:Profession;
	loan:LoanDetails;
	guarantor:Guarantor;
	car:CarInfo;
}
