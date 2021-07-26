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

  private schoolUrl = 'http://localhost:8000/api/schools.json';

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
}
