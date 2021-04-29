import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
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
    surnames: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
  });
  json: any = false;
  alert: any;

  constructor(private http: HttpClient, private route: Router, private formBuilder: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.form.value);
    if (this.form.controls['name'].value == "") { 
      alert('Datos mal introducidos');
    } else if (this.form.controls['surnames'].value == "") {
      alert('Datos mal introducidos');
    } else if (this.form.controls['phone'].value == "") {
      alert('Datos mal introducidos');
    } else if (this.form.controls['email'].value == "") {
      alert('Datos mal introducidos');
    } else if (this.form.controls['password'].value == "") {
      alert('Datos mal introducidos');
    } else {
      // var user = {
      //   'name': this.form.controls['name'].value,
      //   'surnames': this.form.controls['surnames'].value,
      //   'phone': this.form.controls['phone'].value,
      //   'email': this.form.controls['email'].value,
      //   'password': this.form.controls['password'].value
      // }
      
      this.authService.userRegister(this.form.value);
    }
  }

}
