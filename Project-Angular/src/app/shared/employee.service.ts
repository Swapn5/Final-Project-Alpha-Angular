import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../pojo/employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  public url: string = 'http://localhost:9001/admin';

  public url1: string = 'http://localhost:9001/admin/employee';
  public url2: string = 'http://localhost:9001/admin/empProfile';

  emp: Employee = {
    eid: '',
    password: '',
    firstName: '',
    lastName: '',
    role: '',
    gender: '',
    birthDate: '',
    email: ''
  }



  constructor(private http: HttpClient) { }

  public saveEmployee(emp: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.url}/employee`, emp);
  }

  savedocs(up: FormData): Observable<File> {
    return this.http.post<File>(`${this.url}/empProfile`, up);
  }

  public login(id: string, password: string): Observable<Employee> {
    console.log(this.url1);
    return this.http.get<Employee>(`${this.url}/employee/${id}/${password}`);
  }
  
  public getEmployeeList(): Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.url}/employeeList`);
  }
 
  public deleteEmployee(id:any): Observable<any>{
    return this.http.delete<any>(`${this.url}/employee/${id}`);
  }

  deleteEmpPhoto(id: any): Observable<File> {
    return this.http.delete<any>(`${this.url}/empProfile/${id}`);
  }

}
