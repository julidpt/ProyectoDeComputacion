import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  form = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email]),
    password: new FormControl('', [
      Validators.required
    ])
  });
  badreq: boolean = false;
  // @ViewChild('content') block: ElementRef;

  constructor(private http: HttpClient, private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.authService.userValidation;
  }

  get email(){
    return this.form.get('email')
  }

  get password(){
    return this.form.get('password')
  }

  submit() {
    this.authService.userLogin(this.form.value)
      .subscribe(
        response => {
          localStorage.setItem('token', response['token']);
          this.router.navigate(['/']);
        },
        error => {
          this.badreq = true;
        })
  }

  validate() {
    // this.authService.post('')
    alert('email confirmado')
  }
}
