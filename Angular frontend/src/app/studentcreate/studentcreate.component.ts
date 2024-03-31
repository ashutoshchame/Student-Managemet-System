import { Component } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-studentcreate',
  templateUrl: './studentcreate.component.html',
  styleUrls: ['./studentcreate.component.css']
})
export class StudentcreateComponent {
   
  name!: String;
  email!: String;
  rollno!: String;

  constructor(private studentService: StudentService){}

  saveStudentData(){
    if(this.name == '' || this.email == '' || this.rollno == ''){
    alert('All field are mandatary')
    return false;
  }

  var student = { id: 0, name: this.name, email: this.email, rollno: this.rollno }
  this.studentService.saveStudent(student).subscribe(res =>{
    console.log(res);
    if(res){
      alert("Student Created!");
      this.name= " "
      this.email= " "
      this.rollno= " "
    }
  })
}
}