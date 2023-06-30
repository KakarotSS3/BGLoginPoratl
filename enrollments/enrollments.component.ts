import { Component } from '@angular/core';

@Component({
  selector: 'app-enrollments',
  templateUrl: './enrollments.component.html',
  styleUrls: ['./enrollments.component.css']
})
export class EnrollmentsComponent {


  insuranceData  = [
    { name: 'Plan1', type: 'Medical', EffectiveDate: '1/1/2023', Carrier: 'EPA', CostPayPeriod: '100' },
    { name: 'Plan2', type: 'Dental', EffectiveDate: '2/1/2023', Carrier: 'EPA', CostPayPeriod: '102' },
  ];

}
