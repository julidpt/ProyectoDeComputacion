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
      if (response['message'] == 'user created') {
        this.router.navigate(['/login']);
      } else {
        alert('email ya existente en la bbdd')
      }
    })
  }

  userLogin(userPayload) {
    console.log(userPayload);

    this.http.post(`${baseUrl}login`, userPayload).subscribe((response: any) => {
      console.log(response);
      if (response['message'] == 'access allowed') {
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

  // loadUser() {
  //   if (!this.user) {
  //     const accesstoken = localStorage.getItem("accestoken");

  //     if (accesstoken) {
  //       const decryptedUser = this.helper.decodeToken(accesstoken);

  //       const data = {
  //         accessToken : accesstoken,
  //         refreshToken : localStorage.getItem("refreshtoken"),
  //         username : decryptedUser.username,
  //         userid : decryptedUser.sub,
  //         tokenExpiration : decryptedUser.exp
  //       };

  //       this.user.next()
  //     }
  //   }
  // }

  // userLogin(userPayload) {
  //   console.log(userPayload);
  //   const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlRlc3QiLCJzdWIiOjIsImlhdCI6MTYwNDMwOTc0OSwiZXhwIjoxNjA0MzA5ODA5fQ.jHez9kegJ7GT1AO5A2fQp6Dg9A6PBmeiDW1YPaCQoYs";
  //   const refreshToken = "newtoken";

  //   localStorage.setItem("accesstoken", accessToken);
  //   localStorage.setItem("refershtoken", refreshToken);

  //   const data = {
  //     accessToken : accessToken,
  //     refreshToken : refreshToken,
  //     username : decryptedUser.username,
  //     userid : decryptedUser.sub,
  //     tokenExpiration : decryptedUser.exp
  //   }

  //   this.user.next(data);
  //  }
}
