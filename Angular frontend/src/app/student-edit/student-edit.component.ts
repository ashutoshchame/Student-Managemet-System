import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Action } from 'rxjs/internal/scheduler/Action';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent {
  student: any
  studentId!: any
  loading:boolean = true;
  constructor(private route: ActivatedRoute, private studentService:StudentService){}

  ngOnInit(){
    this.studentId = this.route.snapshot.paramMap.get('id');

    this.studentService.getStudent(this.studentId).subscribe(res =>{
      this.student =res;
      // console.log(res);
      this.loading = false;
    });
  }

  updateStudentData(){
    var data = {
      id:this.studentId,
      name:this.student.name,
      email:this.student.email,
      rollno:this.student.rollno,
    }
     this.studentService.updateStudent(data).subscribe(res =>{
      console.log(res);
     })
  }
}
