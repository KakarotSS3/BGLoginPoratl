import { Component, OnInit } from '@angular/core';
import UserJson from '../Data.json'

import { UserDataService } from '../user-data.service';
interface User {
  id: string;
  firstName: string;
  lastName: string;
  gender: string;
  title: string;
  email: string;
  birthdate: string;
  hireDate: string;
  phone: string;
  SSN: string;
  mailingStreet: string;
  mailingState: string;
  mailingCity: string;
  mailingPostalCode: string;
  username: string;
  pass: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  persons: any[] = [
    { firstname: 'Kristen',lastname: 'Doe',SSN:'126-9898', birthdate: '25-8-1994',relationship:'spouse',sex:'Female' },
    { firstname: 'Michel',lastname: 'Doe',SSN:'126-9898', birthdate: '29-5-1980',relationship:'Son',sex:'Male' },
    { firstname: 'Harry',lastname: 'Doe',SSN:'126-9898', birthdate: '2-6-1994',relationship:'Son',sex:'Male' }
  ];

 
  


 

  isContainer1Visible = true;
  isContainer2Visible = false;
  isButton1Clicked = false;
  isButton2Clicked = false;


  userData: any = [];
  constructor(private userdataservice: UserDataService) {

    this.userdataservice.getUserData().subscribe((data) => {
      console.log(data)
      this.userData = data;
    })
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  toggleButton(buttonNumber: number): void {
    if (buttonNumber === 1) {
      this.isButton1Clicked = !this.isButton1Clicked;
      this.isButton2Clicked = false;
      this.isContainer1Visible = true;
      this.isContainer2Visible = false;
    } else if (buttonNumber === 2) {
      this.isButton2Clicked = !this.isButton2Clicked;
      this.isButton1Clicked = false;
      this.isContainer1Visible = false;
      this.isContainer2Visible = true;
    }
  }


  newPerson: any = { name: '', age: null, city: '' };
  showAddRow: boolean = false;

  addRow() {
    this.showAddRow = true;
  }

  saveData() {
    this.persons.push(this.newPerson);
    this.newPerson = { name: '', age: null, city: '' };
    this.showAddRow = false;
  }

  cancelAdd() {
    this.newPerson = { name: '', age: null, city: '' };
    this.showAddRow = false;
  }

}