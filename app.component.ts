import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { UserDataService } from './user-data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  userData: any =[];
  title: any;
  constructor(private userdataservice:UserDataService){

    this.userdataservice.getUserData().subscribe((data)=>{
      console.log(data)
      this.userData = data;
     })
  }
 
 
 
}
