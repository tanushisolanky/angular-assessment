import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpService {
  url = 'http://localhost:3000'
  constructor(private http: HttpClient) { }
  getEmployees(){
    return this.http.get(this.url + '/employees');
  }

  addEmployee(employeeName: string, employeeAge: string, employeeDepartment: string){
    const requestBody = {
      id: Math.floor(Math.random() * 90 + 10),
      name: employeeName,
      age: employeeAge,
      department: employeeDepartment
    }
    return this.http.post(this.url + '/employees', requestBody);
  }

  deleteEmployee(id:number){
    return this.http.delete(this.url + '/employees/' + id);
  }
}
