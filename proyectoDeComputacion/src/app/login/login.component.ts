import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { sha256 } from 'js-sha256';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formGroup!: FormGroup;
  Email: string = '';
  Password: string = '';
  json: any = false;

  constructor(private authService: AuthServiceService) { }

  ngOnInit() {
    this.initForm();
  }
  
  initForm() {
    this.formGroup = new FormGroup({
      emailField: new FormControl("", [Validators.required]),
      passwdField: new FormControl("", [Validators.required])
    });
  }

  loginProcess(){
    if(this.formGroup.valid){
      this.authService.login(this.formGroup.value).subscribe(result=>{
        if(result.success){
          console.log(result);
          alert(result.message);
        } else {
          alert(result.message);
        }

      });
    }
  }

  
  // submit() {
  //   this.http.post(environment.apiLogInUrl, { 
  //     Email: this.Email,
  //     Password: sha256(this.Password)

  //   }).toPromise().then(response => {
  //     console.log(response);
  //     this.json = response;
  //     }
  //   )

  // }

}
