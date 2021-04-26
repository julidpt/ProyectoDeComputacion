import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from 'src/environments/environment';
import { sha256 } from 'js-sha256';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  form = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    lastNames: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
  });
  json: any = false;
  alert: any;

  constructor(private http: HttpClient, private route: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  emptyFields() {    
    if (this.form.controls['email'].value == "") {
      this.alert = "Rellene todos los campos";
    } else if (this.form.controls['password'].value == "") {
      this.alert = "Rellene todos los campos";
    } else if (this.form.controls['name'].value == "") {
      this.alert = "Rellene todos los campos";
    } else if (this.form.controls['lastNames'].value == "") {
      this.alert = "Rellene todos los campos";
    } else if (this.form.controls['phone'].value == "") {
      this.alert = "Rellene todos los campos";
    } else {
      this.alert = ("Bienvenido " + this.form.controls['email'].value);
    }
  }

  submit() {
    console.log(this.form.controls['name'].value);
    console.log(this.form.controls['lastNames'].value);
    console.log(this.form.controls['phone'].value);
    console.log(this.form.controls['email'].value);
    console.log(this.form.controls['password'].value);
    this.http.post(`${baseUrl}register`, { 
      name: this.form.controls['name'].value,
      lastNames: this.form.controls['lastNames'].value,
      phone: this.form.controls['phone'].value,
      email: this.form.controls['email'].value,
      password: sha256(this.form.controls['password'].value)
    }).toPromise().then(response => {
      console.log(response);
      this.json = response;
      this.route.navigate['/login']
      }
    )
  }

}
