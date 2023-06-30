import { Component } from '@angular/core';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent {
  cases: any[] = [
    { ticket: 'Kristen',subject: 'Doe',openDate:'25-8-1994'},
    { ticket: 'Michel',subject: 'Doe',openDate:'29-5-1980'},
    
  ];
}
