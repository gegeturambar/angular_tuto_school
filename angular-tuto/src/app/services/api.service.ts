import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(protected http: HttpClient) {
  }

 protected static apiUrl = environment.apiHost+'/'+environment.apiPathname;

 private headers = {
   'Content-Type': 'application/json',
   'Accept': 'application/json',
   'Access-Control-Allow-Headers': 'Content-Type'
 };

 protected requestOptions = {
   headers: new HttpHeaders(this.headers),
 };
}
