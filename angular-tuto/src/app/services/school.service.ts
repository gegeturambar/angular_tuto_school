import { Injectable } from '@angular/core';
import { School } from "../repository/dto/school";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { map, tap } from "rxjs/operators";
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class SchoolService extends ApiService{

  private static schoolUrl = SchoolService.apiUrl+'/schools';

  getSchools(): Observable<School[]> {
    return this.http.get<any[]>(SchoolService.schoolUrl, this.requestOptions)
    .pipe(
      map(
          jsonSchools =>
            jsonSchools.map( jsonSchool => School.fromJson(jsonSchool))
        )
    );
  }

  getSchool(id: Number): Observable<School> {
    return this.http.get<any>(SchoolService.schoolUrl+`/${id}`, this.requestOptions)
    .pipe(
        map(
          jsonSchool => School.fromJson(jsonSchool)
        )
    );
  }

  createSchool(school: School): Observable<School> {
    console.log(school);
    return this.http.post<any>(SchoolService.schoolUrl,school, this.requestOptions)
    .pipe(
        map(
          jsonSchool => School.fromJson(jsonSchool)
        )
    );
  }

  updateSchool(school: School): Observable<School> {
    return this.http.put<any>(SchoolService.schoolUrl+`/${school.id}`,school, this.requestOptions)
    .pipe(
        map(
          jsonSchool => {
            return School.fromJson(jsonSchool);
          }
        )
    );
  }

}
