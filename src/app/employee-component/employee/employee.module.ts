import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponentComponent } from '../employee-component.component';
import { StarComponent } from 'src/app/shared/star/star.component';
import { WelcomeComponentComponent } from 'src/app/welcome-component/welcome-component.component';
import { EmployeedetailComponentComponent } from '../employeedetail-component/employeedetail-component.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EmployeedetailGuard } from '../employeedetail-component/employeedetail.guard';

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
    WelcomeComponentComponent,
    EmployeedetailComponentComponent
  ]
})
export class EmployeeModule {}
