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

  onAddEmployee(firstName: string, lastName: string, email: string, department: string, address: string, contactNumber: string, description: any,  status: any){
    this.empService.addEmployee(firstName, lastName, email, department, address, contactNumber, description, status).subscribe((response: any) => {
      console.log('response: ', response);
      this.getUpdatedData.next(true);

    });

  }
}
