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

  addEmployee(firstName: string, lastName: string, email: string, department: any, address: any, contactNumber:string, description: any, status:any){
    const requestBody = {
      id: Math.floor(Math.random() * 90 + 10),
      fname: firstName,
      lname: lastName,
      email: email,
      dep: department,
      address: address,
      cn: contactNumber,
      des: description,
      status: status,
    }
    return this.http.post(this.url + '/employees', requestBody);
  }

  deleteEmployee(id:number){
    return this.http.delete(this.url + '/employees/' + id);
  }
}
