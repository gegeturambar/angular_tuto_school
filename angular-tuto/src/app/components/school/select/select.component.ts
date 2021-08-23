import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { School } from 'src/app/repository/dto/school';
import { SchoolService } from 'src/app/services/school.service';


@Component({
  selector: 'app-select-school',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  @Input() defaultSchool ?: School;

  @Output() selectEvent = new EventEmitter<any>();

  schools: School[] = [];

  constructor(private schoolService: SchoolService) { }

  ngOnInit(): void {
    this.getSchools();
  }

  getSchools(): void{
    this.schoolService.getSchools().subscribe(schools => this.schools = schools);
  }

  change(event : Event){
    let id = Number((event.target as HTMLInputElement).value);
    this.defaultSchool = this.schools.find(school => school.id == id);
    this.selectEvent.emit(this.defaultSchool);
  }
}
