import { HttpClient } from '@angular/common/http';
import { baseUrl } from 'src/environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUser() {
    return this.http.get(`${baseUrl}user/getUser`);
  }

  getUsers() {
    return this.http.get(`${baseUrl}user/getUsers`);
  }

  userEdit(userPayload, id) {
    return this.http.post<any>(`${baseUrl}user/edit/${id}`, userPayload)
  }
}
