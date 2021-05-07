import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  fieldSearch: string = '';
  json: any;


  constructor(private authService: AuthService,private http: HttpClient) { }

  ngOnInit(): void {
  }

  search() {
    this.http.post(`${baseUrl}search`, { 
      text: this.fieldSearch
    }).toPromise().then(response => {
      console.log(response);
      this.json = response;

      }
    )
  }

  exit(){
    alert("¡Has cerrado sesión correctamente!");
    this.authService.userLogout();
  }

}
