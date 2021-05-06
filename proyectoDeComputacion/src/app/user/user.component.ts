import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user = {
    name:'Juan',
    surnames:'Lasso de la Vega', 
    email:'juan@gmail.com',
    phone:'1234567890'
  }

  towns: string[];
  // photos: string[];

  constructor(private authService: AuthService) {
    this.towns = ['Santillana del Mar', 'Trujillo', 'Pedraza', 'Chinchón', 'Comillas', 'Almagro', 'Potes', 'Guadalupe', 'Lerma'];
    // this.photos = ['../../assets/towns/santillana.jpg', '../../assets/towns/trujillo.jpg']
  }

  ngOnInit(): void {
    // this.authService.user.subscribe(value => {
    //   if (value) {
    //     this.user.id = value.userid;
    //     this.user.username = value.username;
    //   }
    // })
  }
}
