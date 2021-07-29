import { Component, OnInit } from '@angular/core';
import { SchoolService } from "../services/school.service";
import { School } from "../repository/dto/school";

@Component({
  selector: 'app-school-list',
  templateUrl: './school-list.component.html',
  styleUrls: ['./school-list.component.css']
})
export class SchoolListComponent implements OnInit {

  schools: School[] = [];

  constructor(private schoolService: SchoolService) { }

  ngOnInit(): void {
    this.getSchools();
  }

  getSchools(): void {
    this.schoolService.getSchools().subscribe(schools => 
      this.schools = schools
    );
  }

}
