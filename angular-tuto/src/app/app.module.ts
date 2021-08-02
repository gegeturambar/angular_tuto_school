import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeacherListComponent } from './pages/teacher-list/teacher-list.component';
import { PupilListComponent } from './pages/pupil-list/pupil-list.component';
import { SchoolListComponent } from './pages/school-list/school-list.component';
import { SchoolFormComponent } from './pages/school-form/school-form.component';
import { PupilFormComponent } from './pages/pupil-form/pupil-form.component';
import { TeacherFormComponent } from './pages/teacher-form/teacher-form.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SelectComponent } from './components/school/select/select.component';


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
    NavbarComponent,
    SelectComponent
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
