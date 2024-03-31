import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentcreateComponent } from './studentcreate/studentcreate.component';
import { NavbarComponent } from './partial/navbar/navbar.component'
import { FormsModule } from '@angular/forms';
import { StudentEditComponent } from './student-edit/student-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    StudentcreateComponent,
    NavbarComponent,
    StudentEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
