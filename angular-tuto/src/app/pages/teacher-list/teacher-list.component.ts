import { Component, OnInit } from '@angular/core';
import { TeacherService } from "../../services/teacher.service";
import { Teacher } from "../../repository/dto/teacher";

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {

  teachers: Teacher[] = [];

  constructor(private teacherService: TeacherService) { }

  ngOnInit(): void {
    this.getTeachers();
  }

  getTeachers(): void {
    this.teacherService.getTeachers().subscribe(teachers => 
      this.teachers = teachers
    );
  }

}
