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
  token;
  user: BehaviorSubject<any> = new BehaviorSubject(null);
  // helper = new JwtHelperService();

  constructor(private http: HttpClient, private router: Router) { }

  userLogin(userPayload) {
    console.log(userPayload);

    this.http.post(`${baseUrl}login`, userPayload).subscribe((response: any) => {
      this.router.navigate(['/user']);
      localStorage.setItem('token', response.token);
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
