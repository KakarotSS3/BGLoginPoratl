import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import { Data } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor( private http:HttpClient ) {}
   getUserData(){
    return this.http.get('D:\BgEnrollmentPortal\src\main\resources\templates\BGLoginPortal\src\app\Data.json'); 
   }
}
