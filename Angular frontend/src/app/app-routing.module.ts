import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentcreateComponent } from './studentcreate/studentcreate.component';
import { StudentEditComponent } from './student-edit/student-edit.component';


const routes: Routes = [
  {path: "students", component:StudentListComponent},
  {path: "students/add", component:StudentcreateComponent},
  {path: "students/:id", component:StudentEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
