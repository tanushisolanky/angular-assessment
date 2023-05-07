import { Component, EventEmitter, Output } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.scss']
})
export class AddEmpComponent {
  @Output() public getUpdatedData: EventEmitter<boolean>;
  constructor(private empService : EmpService){
    this.getUpdatedData = new EventEmitter <boolean>();
  }

  onAddEmployee(employeeName: string, employeeAge: string, employeeDepartment: string){
    this.empService.addEmployee(employeeName, employeeAge, employeeDepartment).subscribe((response: any) => {
      console.log('response: ', response);
      this.getUpdatedData.next(true);
    });

  }
}
