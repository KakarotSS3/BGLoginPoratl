import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { ProfileComponent } from '../profile/profile.component';
const routes: Routes = [
  {path:'appCompo',component:AppComponent},
  {path:'profile',component:ProfileComponent}
];
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
showLogin = false

}
