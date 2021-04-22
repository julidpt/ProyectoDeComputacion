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

    console.log(JSON.stringify({ Email: email.value, Password: password.value }));

  }

}
