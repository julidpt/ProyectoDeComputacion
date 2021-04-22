import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    var name = <HTMLInputElement>document.getElementById('name');
    var apellidos = <HTMLInputElement>document.getElementById('apellidos');
    var phone = <HTMLInputElement>document.getElementById('phone');
    var email = <HTMLInputElement>document.getElementById('email');
    var password = <HTMLInputElement>document.getElementById('password');

    console.log(name.value);
    console.log(apellidos.value);
    console.log(phone.value);
    console.log(email.value);
    console.log(password.value);
  
    if (name.value !== null && apellidos.value !== null && phone.value !== null && email.value !== null && password.value !== null) {
      window.alert('¡ERROR!');
    } else {
      window.location.href = '/login';
    }

  }

}
