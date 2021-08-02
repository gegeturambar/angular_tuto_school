import { Component, OnInit } from '@angular/core';
import { School } from 'src/app/repository/dto/school';
import { SchoolService } from 'src/app/services/school.service';

@Component({
  selector: 'app-select-school',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  schools: School[] = [];

  constructor(private schoolService: SchoolService) { }

  ngOnInit(): void {
    this.getSchools();
  }

  getSchools(): void{
    this.schoolService.getSchools().subscribe(schools => this.schools = schools);
  }

}
