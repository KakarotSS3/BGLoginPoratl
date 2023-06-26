import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManangeEmployeesComponent } from './manange-employees.component';

describe('ManangeEmployeesComponent', () => {
  let component: ManangeEmployeesComponent;
  let fixture: ComponentFixture<ManangeEmployeesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManangeEmployeesComponent]
    });
    fixture = TestBed.createComponent(ManangeEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
