import { Injectable } from '@angular/core';
import { Pupil } from "../repository/dto/pupil";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { map, tap } from "rxjs/operators";
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class PupilService extends ApiService{

  static pupilUrl = PupilService.apiUrl+'/pupils';

  getPupils(): Observable<Pupil[]> {
    return this.http.get<any[]>(PupilService.pupilUrl, this.requestOptions)
    .pipe(
      map(
          jsonPupils =>
            jsonPupils.map( jsonPupil => Pupil.fromJson(jsonPupil))
        )
    );
  }

  getPupil(id: Number): Observable<Pupil> {
    return this.http.get<any>(PupilService.pupilUrl+`/${id}`, this.requestOptions)
    .pipe(
        map(
          jsonPupil => Pupil.fromJson(jsonPupil)
        )
  );
  }

  createPupil(pupil: Pupil): Observable<Pupil> {
    delete pupil.id;

    return this.http.post<any>(PupilService.pupilUrl,pupil, this.requestOptions)
    .pipe(
        map(
          jsonPupil => Pupil.fromJson(jsonPupil)
        )
    );
  }

  updatePupil(pupil: Pupil): Observable<Pupil> {
    return this.http.put<any>(PupilService.pupilUrl+`/${pupil.id}`,Pupil.toJson(pupil), this.requestOptions)
    .pipe(
        map(
          jsonPupil => {
            return Pupil.fromJson(jsonPupil);
          }
        )
    );
  }

}
