import { Component } from '@angular/core';
import { EmpService } from './emp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'practice-service';

  employees: { name: string, universe: string }[] = [];

  constructor(private employeesService: EmpService) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() {
    this.employeesService.getEmployees().subscribe((response: any) => {
      this.employees = response;
    });
}

  getUpdatedData(event:any){
    this.getEmployees();
  }
}
