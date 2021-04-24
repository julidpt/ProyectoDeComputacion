import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http:HttpClient) { }
  login(data):Observable<any>{
    console.log("holiwoli");
    return this.http.post(`${baseUrl}login`, data);
  }
}
