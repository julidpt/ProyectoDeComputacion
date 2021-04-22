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

    console.log(email.value);
    console.log(password.value);
  
    if (email.value !== null && password.value !== null) {
      window.alert('¡ERROR!');
    } else {
      window.location.href = '/user';
    }

  }

}
