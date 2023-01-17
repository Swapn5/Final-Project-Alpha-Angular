import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FAQComponent implements OnInit {

  
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup=this._formBuilder.group({
    thirdCtrl:['',Validators.required],
  });
  forthFormGroup=this._formBuilder.group({
    thirdCtrl:['',Validators.required],
  });
  fifthFormGroup=this._formBuilder.group({
    thirdCtrl:['',Validators.required],
  });
  sixFormGroup=this._formBuilder.group({
    thirdCtrl:['',Validators.required],
  }); 
  sevenFormGroup=this._formBuilder.group({
    thirdCtrl:['',Validators.required],
  });
  eightFormGroup=this._formBuilder.group({
    thirdCtrl:['',Validators.required],
  });
  nineFormGroup=this._formBuilder.group({
    thirdCtrl:['',Validators.required],
  }); 
  tenFormGroup=this._formBuilder.group({
    thirdCtrl:['',Validators.required],
  });
  elevenFormGroup=this._formBuilder.group({
    thirdCtrl:['',Validators.required],
  });
  twelveFormGroup=this._formBuilder.group({
    thirdCtrl:['',Validators.required],
  });
  thirteenFormGroup=this._formBuilder.group({
    thirdCtrl:['',Validators.required],
  });
  forteenFormGroup=this._formBuilder.group({
    thirdCtrl:['',Validators.required],
  })


  isLinear = false;

  constructor(private _formBuilder: FormBuilder) {}
 
  ngOnInit(): void {
    
  }
}

