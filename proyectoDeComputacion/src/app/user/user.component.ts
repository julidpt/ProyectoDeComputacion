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

  cards = [{"imagen":"../../assets/towns/santillana.jpg", "nombre": "Santillana del Mar"}, 
           {"imagen":"../../assets/towns/trujillo.jpg", "nombre": "Trujillo"},
           {"imagen":"../../assets/towns/pedraza.jpg", "nombre": "Pedraza"},
           {"imagen":"../../assets/towns/chinchon.jpg", "nombre": "Chinchón"}];

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    // this.authService.user.subscribe(value => {
    //   if (value) {
    //     this.user.id = value.userid;
    //     this.user.username = value.username;
    //   }
    // })
  }
}
