import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchoolListComponent } from "./school-list/school-list.component";
import { SchoolFormComponent } from "./school-form/school-form.component";
import { PupilListComponent } from "./pupil-list/pupil-list.component";
import { PupilFormComponent } from "./pupil-form/pupil-form.component";

const routes: Routes = [
  { path: 'school-list', component: SchoolListComponent},
  { path: 'school-form', component: SchoolFormComponent},
  { path: 'pupil-list', component: PupilListComponent},
  { path: 'pupil-form', component: PupilFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
