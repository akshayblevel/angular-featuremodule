import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EmployeeComponentComponent } from './employee-component.component';
import { StarComponent } from '../shared/star/star.component';
import { EmployeedetailComponentComponent } from './employeedetail-component/employeedetail-component.component';
import { EmployeedetailGuard } from './employeedetail-component/employeedetail.guard';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'employees', component: EmployeeComponentComponent },
      {
        path: 'employees/:id',
        component: EmployeedetailComponentComponent,
        canActivate: [EmployeedetailGuard]
      }
    ])
  ],
  declarations: [
    EmployeeComponentComponent,
    StarComponent,
    EmployeedetailComponentComponent
  ]
})
export class EmployeeModule {}
