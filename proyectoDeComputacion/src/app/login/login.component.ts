import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { sha256 } from 'js-sha256';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  Email: string = '';
  Password: string = '';
  json: any = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  submit() {
    this.http.post(environment.apiLogInUrl, { 
      Email: this.Email,
      Password: sha256(this.Password)

    }).toPromise().then(response => {
      console.log(response);
      this.json = response;
      }
    )


    // var email = <HTMLInputElement>document.getElementById('email');
    // var password = <HTMLInputElement>document.getElementById('password');

    // var result = JSON.stringify({ Email: email.value, Password: password.value });

    // window.alert("Bienvenido " + email.value + "\n" + result);

    // window.location.href = "/user";

  }

}
