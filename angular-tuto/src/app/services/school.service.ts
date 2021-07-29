import { Injectable } from '@angular/core';
import { School } from "../repository/dto/school";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { map, tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  constructor(private http: HttpClient) {
   }

  private schoolUrl = 'http://localhost:8000/api/schools';

  private headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type'
  };

  private requestOptions = {
    headers: new HttpHeaders(this.headers),
  };

  getSchools(): Observable<School[]> {
    return this.http.get<any[]>(this.schoolUrl, this.requestOptions)
    .pipe(
      map(
          jsonSchools => 
            jsonSchools.map( jsonSchool => School.fromJson(jsonSchool))
        )
    );
  } 

  getSchool(id: Number): Observable<School> {
    return this.http.get<any>(this.schoolUrl+`/${id}`, this.requestOptions)
    .pipe(
        map(
          jsonSchool => School.fromJson(jsonSchool)
        )
    );
  }

  createSchool(school: School): Observable<School> {
    console.log(school);
    return this.http.post<any>(this.schoolUrl,school, this.requestOptions)
    .pipe(
        map(
          jsonSchool => School.fromJson(jsonSchool)
        )
    );
  }

  updateSchool(school: School): Observable<School> {
    return this.http.put<any>(this.schoolUrl+`/${school.id}`,school, this.requestOptions)
    .pipe(
        map(
          jsonSchool => {
            return School.fromJson(jsonSchool);
          }
        )
    );
  }

}
