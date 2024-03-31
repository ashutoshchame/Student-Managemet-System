import { Component } from '@angular/core';
import {Student} from 'src/app/Modles/Student';

import {StudentService} from 'src/app/student.service'

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent { 
  students: Array<Student> = []
  constructor (private studentService: StudentService){}

  ngOnInit(){
    this.getStudentList();
  }

  getStudentList(){
    this.studentService.getStudents().subscribe(res =>{
      this.students = res;
      console.log(res);
    })
  }

  deleteStudent(id:any){
    this.studentService.deleteStudent(id).subscribe(res =>{
      console.log(res);
      this.getStudentList();
      
       if(res){
        alert("Student deleted!")
       }
    })
  }
}
