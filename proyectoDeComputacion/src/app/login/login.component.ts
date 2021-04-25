import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from 'src/environments/environment';
import { sha256 } from 'js-sha256';
import { Router } from '@angular/router';
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

  constructor(private http: HttpClient, private route: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  submit(): void {
    console.log(this.form.controls['email'].value);
    this.http.post(`${baseUrl}login`, {
      email: this.form.controls['email'].value,
      password: sha256(this.form.controls['password'].value)
    }).toPromise().then(response => {
      console.log(response);
      this.json = response;
      this.route.navigate['']
      }
    )
  }
}
