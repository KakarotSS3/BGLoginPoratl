import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParentChildService {

  constructor(private http:HttpClient) { }

  getUserData(){
    return this.http.get<any>('./UserData.json');
  }
  getData(): Observable<any> {
    return this.http.get<any>('./UserData.json');
  }
}
