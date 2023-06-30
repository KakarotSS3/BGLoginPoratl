import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { LoginPageComponent } from './login-page/login-page.component';
import { ManangeEmployeesComponent } from './manange-employees/manange-employees.component';
import { HeaderComponent } from './header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import{ HttpClientModule } from '@angular/common/http'
import { UserService } from './user.service';
import { EnrollmentsComponent } from './enrollments/enrollments.component';
import { SupportComponent } from './support/support.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ForgetPasswordComponent,
    ProfileComponent,
    LoginPageComponent,
    ManangeEmployeesComponent,
    HeaderComponent,
    PageNotFoundComponent,
    EnrollmentsComponent,
    SupportComponent



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {

}
