import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from 'src/environments/environment';
import { sha256 } from 'js-sha256';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  form = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  json: any = false;
  alert: any;

  constructor(private http: HttpClient, private route: Router, private formBuilder: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
  }

  emptyFields() {    
    if (this.form.controls['email'].value == "") {
      this.alert = "email y/o contraseña incorrectos";
    } else if (this.form.controls['password'].value == "") {
      this.alert = "email y/o contraseña incorrectos";
    } else {
      this.alert = ("Bienvenido " + this.form.controls['email'].value);
    }

    // if (this.form.controls['email'].value == "") {
    //   return true;
    // } else if (this.form.controls['password'].value == "") {
    //   return true;
    // } else {
    //   return false;
    // }
  }

  submit() {
    console.log(this.form.value);
    this.authService.userLogin(this.form.value);
    alert("user logged in");
    this.route.navigate(['/user'])
    // this.route.navigate(['/register'])
    // this.http.post(`${baseUrl}login`, {
    //   email: this.form.controls['email'].value,
    //   password: sha256(this.form.controls['password'].value)
    // }).toPromise().then(response => {
    //   console.log(response);
    //   this.json = response;
    //   this.route.navigate['']
    //   }
    // )
  }
}
