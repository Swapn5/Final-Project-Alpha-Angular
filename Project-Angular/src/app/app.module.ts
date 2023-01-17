import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { ContactUsComponent } from './Dashboard/contact-us/contact-us.component';
import { EMICalculatorComponent } from './Dashboard/emicalculator/emicalculator.component';
import { FAQComponent } from './Dashboard/faq/faq.component';
import { HomeComponent } from './Dashboard/home/home.component';
import { NavigationbarComponent } from './Dashboard/navigationbar/navigationbar.component';
import { OeComponent } from './modules/oe/oe.component';
import { AdminComponent } from './modules/admin/admin.component';
import { AhComponent } from './modules/ah/ah.component';
import { CmComponent } from './modules/cm/cm.component';
import { ViewENComponent } from './modules/oe/view-en/view-en.component';
import { AddEnquiryComponent } from './modules/re/add-enquiry/add-enquiry.component';
import { ReComponent } from './modules/re/re.component';
import { RegisterComponent } from './modules/re/register/register.component';
import { UploadDocsComponent } from './modules/re/upload-docs/upload-docs.component';
import { ViewEnquiryComponent } from './modules/re/view-enquiry/view-enquiry.component';
import { ModulesComponent } from './modules/modules.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ApplicationsComponent } from './modules/cm/applications/applications.component';
import { ViewappComponent } from './modules/ah/viewapp/viewapp.component';
import { SanctionComponent } from './modules/ah/sanction/sanction.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AddemployeeComponent } from './modules/admin/addemployee/addemployee.component';
import {MatTableModule} from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { AboutUsComponent } from './Dashboard/about-us/about-us.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    FAQComponent,
    EMICalculatorComponent,
    NavigationbarComponent,
    AdminComponent,
    CmComponent,
    AhComponent,
    ReComponent,
    OeComponent,
    AddEnquiryComponent,
    ViewEnquiryComponent,
    RegisterComponent,
    UploadDocsComponent,
    ViewENComponent,
    ModulesComponent,
    LoginComponent,
    ApplicationsComponent,
    ViewappComponent,
    SanctionComponent,
    AddemployeeComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatSidenavModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatCardModule

  ]

})
export class AppModule { }
