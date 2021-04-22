import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    var email = <HTMLInputElement>document.getElementById('email');
    var password = <HTMLInputElement>document.getElementById('password');

    var result = JSON.stringify({ Email: email.value, Password: password.value });

    window.alert("Bienvenido " + email.value + "\n" + result);

    window.location.href = "/user";

  }

}
