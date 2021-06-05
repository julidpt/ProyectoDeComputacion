import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MustMatch} from '../utils/register.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    surnames: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)]),
    confirmPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(6)])
  });
  json: any = false;
  goodreq: boolean = false;
  badreq: boolean = false;

  constructor(private http: HttpClient, private route: Router, private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    
  }

  get name(){
    return this.form.get('name')
  }

  get surnames(){
    return this.form.get('surnames')
  }

  get email(){
    return this.form.get('email')
  }

  get password(){
    return this.form.get('password')
  }

  get confirmPassword(){
    return this.form.get('confirmPassword')
  }

  confirmedValidator(controlName: string, matchingControlName: string){
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
            return;
        }
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ confirmedValidator: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
  }

  submit() {
    this.authService.userRegister(this.form.value)
    .subscribe(
      response => {
        this.badreq = false;
        this.goodreq = true;
        setTimeout(() => {
          this.router.navigate(['/admin']);
        }, 1000)
      },
      error => {
        this.badreq = true;
      })
  }

}