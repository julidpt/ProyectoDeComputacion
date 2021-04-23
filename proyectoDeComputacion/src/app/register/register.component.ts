import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  firstName: string = '';
  lastName: string = '';
  Phone: string = '';
  Email: string = '';
  Password: string = '';
  json: any = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  submit() {
    this.http.post(environment.apiSentimentUrl, { 
      Name: this.firstName,
      lastName: this.lastName,
      Phone: this.Phone,
      Email: this.Email,
      Password: this.Password

    }).toPromise().then(response => {
      console.log(response);
      this.json = response;
      }
    )
  }

}
