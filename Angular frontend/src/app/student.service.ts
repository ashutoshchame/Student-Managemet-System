import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './Modles/Student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  baseUrl: string = "http://localhost:8080/students";
  constructor(private httpClient: HttpClient) { }

  getStudents(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.baseUrl);
  }

  saveStudent(student: Student): Observable<Student> {
    var url = this.baseUrl + '/store';
    return this.httpClient.post<Student>(url, student);
  }

  getStudent(id:any): Observable<Student> {
    var url = this.baseUrl + '/'+ id;
    return this.httpClient.get<Student>(url);
  }

  updateStudent(student:Student): Observable<Student>{
    var url = this.baseUrl + '/update';
    return this.httpClient.put<Student>(url, student);
  }

  deleteStudent(id:any){
    var url = this.baseUrl + '/delete/'+id;
    return this.httpClient.delete(url, {responseType: 'text'});
  }
}
