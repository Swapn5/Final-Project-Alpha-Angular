import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactUsComponent } from './Dashboard/contact-us/contact-us.component';
import { EMICalculatorComponent } from './Dashboard/emicalculator/emicalculator.component';
import { FAQComponent } from './Dashboard/faq/faq.component';
import { HomeComponent } from './Dashboard/home/home.component';

import { LoginComponent } from './login/login.component';
import { NavigationbarComponent } from './Dashboard/navigationbar/navigationbar.component';

import { ModulesComponent } from './modules/modules.component';
import { AdminComponent } from './modules/admin/admin.component';
import { CmComponent } from './modules/cm/cm.component';
import { OeComponent } from './modules/oe/oe.component';
import { ViewENComponent } from './modules/oe/view-en/view-en.component';
import { AddEnquiryComponent } from './modules/re/add-enquiry/add-enquiry.component';
import { ReComponent } from './modules/re/re.component';
import { RegisterComponent } from './modules/re/register/register.component';
import { UploadDocsComponent } from './modules/re/upload-docs/upload-docs.component';
import { ViewEnquiryComponent } from './modules/re/view-enquiry/view-enquiry.component';
import { AhComponent } from './modules/ah/ah.component';
import { ApplicationsComponent } from './modules/cm/applications/applications.component';
import { ViewappComponent } from './modules/ah/viewapp/viewapp.component';
import { SanctionComponent } from './modules/ah/sanction/sanction.component';
import { AddemployeeComponent } from './modules/admin/addemployee/addemployee.component';
import { AboutUsComponent } from './Dashboard/about-us/about-us.component';


const routes: Routes = [

  {
    path: '', redirectTo:'navigate/home' , pathMatch:'full'},
    { path: 'navigate', component: NavigationbarComponent ,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'contactus', component: ContactUsComponent },
      { path: 'aboutus', component:AboutUsComponent},
      { path: 'faq', component: FAQComponent },
      { path: 'emi', component: EMICalculatorComponent },

    ]
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'modules', component: ModulesComponent,
    children: [
      {path:'re', redirectTo:'re/viewenquiry'},
      {
        path: 're', component: ReComponent,
        children: [
          { path: 'addenquiry', component: AddEnquiryComponent },
          { path: 'viewenquiry', component: ViewEnquiryComponent },
          { path: 'register', component: RegisterComponent },
          { path: 'uploaddocs', component: UploadDocsComponent }
        ]
      },

      {
        path: 'admin', component: AdminComponent,
        children: [
          { path: 'addemployee', component: AddemployeeComponent }
        ]
      },
      {path:'oe', redirectTo:'oe/viewen'},
      {
        path: 'oe', component: OeComponent,
        children: [
          { path: 'viewen', component: ViewENComponent }
        ]
      },
      {path:'cm', redirectTo:'cm/app'},
      {
        path: 'cm', component: CmComponent,
        children: [
          { path: 'app', component: ApplicationsComponent }
        ]
      },
      {path:'ah', redirectTo:'ah/viewapp'},
      {
        path: 'ah', component: AhComponent,
        children: [
          { path: 'viewapp', component: ViewappComponent },
          { path: 'sanction', component: SanctionComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

