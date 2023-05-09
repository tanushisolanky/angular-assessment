import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.scss']
})
export class EmpListComponent {
  public headers = [
    {
      fname: "FIRST NAME",
      lname: "LAST NAME",
      email: "EMAIL",
      dep: "DEPARTMENT",
      address: "ADDRESS",
      cn: "CONTACT NUMBER",
      des: "DESCRIPTION",
      status: 'STATUS',
      action: "ACTION"
    }
  ]
  @Input() emp: any;
  
  @Output() public getUpdatedData: EventEmitter<boolean>;
 
constructor(private employeesService: EmpService){ 
  this.getUpdatedData = new EventEmitter <boolean>();
}

  deleteEmployee(empId:number) {
    this.employeesService.deleteEmployee(empId).subscribe((response: any) => {
      this.getUpdatedData.next(true);
    });
  }
}
