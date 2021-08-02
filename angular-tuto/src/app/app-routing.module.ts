import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchoolListComponent } from "./pages/school-list/school-list.component";
import { SchoolFormComponent } from "./pages/school-form/school-form.component";
import { PupilListComponent } from "./pages/pupil-list/pupil-list.component";
import { PupilFormComponent } from "./pages/pupil-form/pupil-form.component";

const routes: Routes = [
  { path: 'school-list', component: SchoolListComponent},
  { path: 'school/:id', component: SchoolFormComponent},
  { path: 'pupil-list', component: PupilListComponent},
  { path: 'pupil/:id', component: PupilFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
