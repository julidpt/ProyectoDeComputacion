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
    console.log(userPayload);

    this.http.post(`${baseUrl}user/register`, userPayload).subscribe((response: any) => {
      console.log(response);
      if (response['status'] == "ok") {
        this.router.navigate(['/login']);
      } else {
        alert('email ya existente en la bbdd');
      }
    })
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
    console.log(userPayload);

    this.http.post(`${baseUrl}user/login`, userPayload).subscribe((response: any) => {
      console.log(response);
      if (response['status'] == 'ok') {
        localStorage.setItem('token', response['token']);
        this.router.navigate(['/admin']);
      } else {
        alert('usuario no registrado en la bbdd')
      }
    })
  }

  loggedIn() {
    return !!localStorage.getItem('token')
  }

  // userDelete() {
  //   this.http.post(`${baseUrl}/user/delete`, ).subscribe((response: any) => {})
  // }

  userLogout() {
    localStorage.removeItem('token');
  }

  webScraper() {
    return this.http.get(`${baseUrl}search`);
  }

  // searchJobs() {
  //   return this.http.get(`${baseUrl}search/jobs`);
  // }

  // searchNews() {
  //   return this.http.get(`${baseUrl}search/news`);
  // }

  // serachRestaurants() {
  //   return this.http.get(`${baseUrl}search/restaurants`);
  // }

  // searchMunicipios() {
  //   return this.http.get(`${baseUrl}search/municipios`);
  // }
}
