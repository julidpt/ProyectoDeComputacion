import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  userRegister(userPayload) {
    console.log(userPayload);

    this.http.post(`${baseUrl}register`, userPayload).subscribe((response: any) => {
      alert("insertado en bbdd")
    })
  }

  userLogin(userPayload) {
    console.log(userPayload);

    this.http.post(`${baseUrl}login`, userPayload).subscribe((response: any) => {
      console.log(response);
      if (response['message'] == 'Access allowed') {
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
