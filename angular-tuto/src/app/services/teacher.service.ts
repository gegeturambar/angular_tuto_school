import { Injectable } from '@angular/core';
import { Teacher } from "../repository/dto/teacher";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { map, tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private http: HttpClient) {
   }

  private teacherUrl = 'http://localhost:8000/api/teachers';

  private headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type'
  };

  private requestOptions = {
    headers: new HttpHeaders(this.headers),
  };

  getTeachers(): Observable<Teacher[]> {
    return this.http.get<any[]>(this.teacherUrl, this.requestOptions)
    .pipe(
      map(
          jsonTeachers => 
            jsonTeachers.map( jsonTeacher => Teacher.fromJson(jsonTeacher))
        )
    );
  } 

  getTeacher(id: Number): Observable<Teacher> {
    return this.http.get<any>(this.teacherUrl+`/${id}`, this.requestOptions)
    .pipe(
        map(
          jsonTeacher => Teacher.fromJson(jsonTeacher)
        )
    );
  }

  createTeacher(teacher: Teacher): Observable<Teacher> {
    delete teacher.id;

    return this.http.post<any>(this.teacherUrl,teacher, this.requestOptions)
    .pipe(
        map(
          jsonTeacher => Teacher.fromJson(jsonTeacher)
        )
    );
  }

  updateTeacher(teacher: Teacher): Observable<Teacher> {
    return this.http.put<any>(this.teacherUrl+`/${teacher.id}`,teacher, this.requestOptions)
    .pipe(
        map(
          jsonTeacher => {
            return Teacher.fromJson(jsonTeacher);
          }
        )
    );
  }

}
