import { Injectable } from '@angular/core';
import { Pupil } from "../repository/dto/pupil";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { map, tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PupilService {

  constructor(private http: HttpClient) {
   }

  private pupilUrl = 'http://localhost:8000/api/pupils';

  private headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type'
  };

  private requestOptions = {
    headers: new HttpHeaders(this.headers),
  };

  getPupils(): Observable<Pupil[]> {
    return this.http.get<any[]>(this.pupilUrl, this.requestOptions)
    .pipe(
      map(
          jsonPupils => 
            jsonPupils.map( jsonPupil => Pupil.fromJson(jsonPupil))
        )
    );
  } 

  getPupil(id: Number): Observable<Pupil> {
    return this.http.get<any>(this.pupilUrl+`/${id}`, this.requestOptions)
    .pipe(
        map(
          jsonPupil => Pupil.fromJson(jsonPupil)
        )
    );
  }

  createPupil(pupil: Pupil): Observable<Pupil> {
    delete pupil.id;

    return this.http.post<any>(this.pupilUrl,pupil, this.requestOptions)
    .pipe(
        map(
          jsonPupil => Pupil.fromJson(jsonPupil)
        )
    );
  }

  updatePupil(pupil: Pupil): Observable<Pupil> {
    return this.http.put<any>(this.pupilUrl+`/${pupil.id}`,pupil, this.requestOptions)
    .pipe(
        map(
          jsonPupil => {
            return Pupil.fromJson(jsonPupil);
          }
        )
    );
  }

}
