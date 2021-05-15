import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  userRegister(userPayload) {
    console.log(userPayload);

    this.http.post(`${baseUrl}register`, userPayload).subscribe((response: any) => {
      console.log(response);
      if (response['message'] == 'ok') {
        this.router.navigate(['/login']);
      } else {
        alert('email ya existente en la bbdd');
      }
    })
  }

  userLogin(userPayload) {
    console.log(userPayload);

    this.http.post(`${baseUrl}login`, userPayload).subscribe((response: any) => {
      console.log(response);
      if (response['message'] == 'ok') {
        localStorage.setItem('token', response['token']);
        this.router.navigate(['/user']);
      } else {
        alert('usuario no registrado en la bbdd')
      }
    })
  }

  userLogout() {
    localStorage.removeItem('token');
  }

  searchJobs() {
    return this.http.get(`${baseUrl}search/jobs`);
  }

  searchNews() {
    return this.http.get(`${baseUrl}search/news`);
  }

  serachRestaurants() {
    return this.http.get(`${baseUrl}search/restaurants`);
  }

  searchMunicipios() {
    return this.http.get(`${baseUrl}search/municipios`);
  }
}
