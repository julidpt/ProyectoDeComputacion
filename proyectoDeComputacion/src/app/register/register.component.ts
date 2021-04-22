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

    var result = JSON.stringify({ Nombre: name.value, Apellidos: apellidos.value, Telefono: phone.value, Email: email.value, Password: password.value })

    window.alert("¡Registrado con éxito!" + "\n" + result);

    window.location.href = "/user";

  }

}
