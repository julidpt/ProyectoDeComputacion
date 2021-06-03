import { Router, ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private loggedInStatus = false;

  constructor(private http: HttpClient, private router: Router, private activatedRoute: ActivatedRoute) { }

  setLoggedIn(value: boolean) {
    this.loggedInStatus = value;
  }

  get isLoggedIn() {
    return this.loggedInStatus
  }

  userRegister(userPayload) {
    return this.http.post<any>(`${baseUrl}user/register`, userPayload)
  }

  userValidation() {
    this.activatedRoute.queryParams.subscribe(params => {
      let email = params['email'];
      let token = params['token'];

      console.log(email);
      console.log(token);
    })
  }

  userLogin(userPayload) {
    return this.http.post(`${baseUrl}user/login`, userPayload);
  }

  loggedIn() {
    return !!localStorage.getItem('token')
  }

  userLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login'])
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
