import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { ProfileComponent } from '../profile/profile.component';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


interface UserData {
  username: string;
  firstname: string;
}

const routes: Routes = [
  { path: 'appCompo', component: AppComponent },
  { path: 'profile', component: ProfileComponent }
];
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users: UserData[] = [];
  firstname: string | undefined;

  constructor(private route: ActivatedRoute,
    private http: HttpClient) {}

  ngOnInit() {
    
    // Retrieve the 'firstname' parameter from the URL
    this.route.paramMap.subscribe(params => {
      const firstName = params.get('firstName');
      this.firstname = firstName ? firstName : undefined;
    });
  }
  fetchUserData() {
    this.http.get<UserData[]>('assets/UserData.json').subscribe(
      data => {
        this.users = data;
        console.log('User Data:', this.users);
      },
      error => {
        console.log('Error fetching user data:', error);
      }
    );
  }
}
