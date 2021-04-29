import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  constructor(private http: HttpClient, private route: Router, private formBuilder: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
  }

  submit() {
    if (this.form.controls['email'].value == "") { 
      alert('Email y/o contraseña no válidos');
    } else if (this.form.controls['password'].value == "") {
      alert('Email y/o contraseña no válidos');
    } else {
      // var user = {
      //   'email': this.form.controls['email'].value,
      //   'password': this.form.controls['password'].value
      // }

      this.authService.userLogin(this.form.value);
    }
  }
}
