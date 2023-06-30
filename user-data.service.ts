import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http:HttpClient) { }

  getUserData(){
    let apiUrl = 'https://jsonplaceholder.typicode.com/users'
    return this.http.get(apiUrl);
  }
}
