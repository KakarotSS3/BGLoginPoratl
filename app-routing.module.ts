import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ProfileComponent } from './profile/profile.component';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ManangeEmployeesComponent } from './manange-employees/manange-employees.component';
import { HeaderComponent } from './header/header.component'; 
import { EnrollmentsComponent } from './enrollments/enrollments.component';
import { SupportComponent } from './support/support.component';


const routes: Routes = [
  {path:'dashboard', component:DashboardComponent},
  {path:'forgetPass',component:ForgetPasswordComponent},
  {path:'appCompo',component:AppComponent},
  {path:'profile',component:ProfileComponent},
  {path:'loginPage',component:LoginPageComponent},
  {path:'**',component:SupportComponent},
  {path:'manageEmploye',component:ManangeEmployeesComponent},
  {path:'header',component:HeaderComponent},
  {path:'enrollment',component:EnrollmentsComponent},
  {path:'support',component:SupportComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule {
  router: any;
  
  }
 

