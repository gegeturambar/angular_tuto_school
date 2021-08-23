import { Injectable } from '@angular/core';
import { Teacher } from "../repository/dto/teacher";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { map, tap } from "rxjs/operators";
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class TeacherService extends ApiService {

  private static teacherUrl =  TeacherService.apiUrl+'/teachers';

  getTeachers(): Observable<Teacher[]> {
    return this.http.get<any[]>(TeacherService.teacherUrl, this.requestOptions)
    .pipe(
      map(
          jsonTeachers =>
            jsonTeachers.map( jsonTeacher => Teacher.fromJson(jsonTeacher))
        )
    );
  }

  getTeacher(id: Number): Observable<Teacher> {
    return this.http.get<any>(TeacherService.teacherUrl+`/${id}`, this.requestOptions)
    .pipe(
        map(
          jsonTeacher => Teacher.fromJson(jsonTeacher)
        )
    );
  }

  createTeacher(teacher: Teacher): Observable<Teacher> {
    delete teacher.id;

    return this.http.post<any>(TeacherService.teacherUrl,teacher, this.requestOptions)
    .pipe(
        map(
          jsonTeacher => Teacher.fromJson(jsonTeacher)
        )
    );
  }

  updateTeacher(teacher: Teacher): Observable<Teacher> {
    return this.http.put<any>(TeacherService.teacherUrl+`/${teacher.id}`,Teacher.toJson(teacher), this.requestOptions)
    .pipe(
        map(
          jsonTeacher => {
            return Teacher.fromJson(jsonTeacher);
          }
        )
    );
  }

}
