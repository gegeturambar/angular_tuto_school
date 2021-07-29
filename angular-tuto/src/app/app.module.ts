import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { PupilListComponent } from './pupil-list/pupil-list.component';
import { SchoolListComponent } from './school-list/school-list.component';
import { SchoolFormComponent } from './school-form/school-form.component';
import { PupilFormComponent } from './pupil-form/pupil-form.component';
import { TeacherFormComponent } from './teacher-form/teacher-form.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    TeacherListComponent,
    PupilListComponent,
    SchoolListComponent,
    SchoolFormComponent,
    PupilFormComponent,
    TeacherFormComponent,
    SidebarComponent,
    NavbarComponent
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
