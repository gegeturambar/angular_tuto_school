import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { PupilListComponent } from './pupil-list/pupil-list.component';
import { SchoolListComponent } from './school-list/school-list.component';
import { SchoolFormComponent } from './school-form/school-form.component';
import { PupilFormComponent } from './pupil-form/pupil-form.component';
import { TeacherFormComponent } from './teacher-form/teacher-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TeacherListComponent,
    PupilListComponent,
    SchoolListComponent,
    SchoolFormComponent,
    PupilFormComponent,
    TeacherFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
