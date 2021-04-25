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
  user: BehaviorSubject<any> = new BehaviorSubject(null);
  helper = new JwtHelperService();

  constructor() { }

  userLogin(userPayload) {
    console.log(userPayload);
    const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlRlc3QiLCJzdWIiOjIsImlhdCI6MTYwNDMwOTc0OSwiZXhwIjoxNjA0MzA5ODA5fQ.jHez9kegJ7GT1AO5A2fQp6Dg9A6PBmeiDW1YPaCQoYs";
    const refreshToken = "newtoken";
    console.log(1);

    localStorage.setItem("accesstoken", accessToken);
    localStorage.setItem("refershtoken", refreshToken);
    console.log(1);

    const decryptedUser = this.helper.decodeToken(accessToken);
    console.log(decryptedUser);

    const data = {
      accessToken : accessToken,
      refreshToken : refreshToken,
      username : decryptedUser.username,
      userid : decryptedUser.sub,
      tokenExpiration : decryptedUser.exp,

    }

    this.user.next(data);
  }
}
