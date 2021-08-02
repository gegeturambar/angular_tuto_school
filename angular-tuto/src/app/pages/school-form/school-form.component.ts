import { Location } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { School } from '../../repository/dto/school';
import { SchoolService } from "../../services/school.service";

@Component({
  selector: 'app-school-form',
  templateUrl: './school-form.component.html',
  styleUrls: ['./school-form.component.css']
})
export class SchoolFormComponent implements OnInit {

  submitted = false;

  onSubmit() {
    console.log(this.school.id)
    if(this.school.id )
      this.schoolService.updateSchool(this.school).subscribe(school => this.school = school);
    else
      this.schoolService.createSchool(this.school).subscribe(school => this.school = school);
    this.submitted = true;
  }

  school: School = new School('',[],[]);

  constructor(private schoolService: SchoolService,private route: ActivatedRoute,  private location: Location) { }

  ngOnInit(): void {
    this.getSchool();
  }

  public goBack() {
    this.location.back();
  }

  getSchool(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if(id)
      this.schoolService.getSchool(id).subscribe(school => this.school = school);
  }

  public getLibelleAction() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    return id ? 'Modify' : 'Create';
  }

  public save() {
    this.schoolService
  }
}
