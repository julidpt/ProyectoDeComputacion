import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //Mas visitados
  cards = [{ "imagen": "../../assets/towns/santillana.jpg", "nombre": "Santillana del Mar" },
  { "imagen": "../../assets/towns/trujillo.jpg", "nombre": "Trujillo" },
  { "imagen": "../../assets/towns/pedraza.jpg", "nombre": "Pedraza" },
  { "imagen": "../../assets/towns/chinchon.jpg", "nombre": "Chinchón" },
  { "imagen": "../../assets/hotel2.png", "nombre": "Hotel 2" }];

  //Mejor valorados
  cards2 = [{ "imagen": "../../assets/towns/santillana.jpg", "nombre": "Santillana del Mar" },
  { "imagen": "../../assets/towns/trujillo.jpg", "nombre": "Trujillo" },
  { "imagen": "../../assets/towns/pedraza.jpg", "nombre": "Pedraza" },
  { "imagen": "../../assets/towns/chinchon.jpg", "nombre": "Chinchón" },
  { "imagen": "../../assets/hotel2.png", "nombre": "Hotel 2" }];

  //Rural
  cards3 = [{ "imagen": "../../assets/towns/santillana.jpg", "nombre": "Santillana del Mar" },
  { "imagen": "../../assets/towns/trujillo.jpg", "nombre": "Trujillo" },
  { "imagen": "../../assets/towns/pedraza.jpg", "nombre": "Pedraza" },
  { "imagen": "../../assets/towns/chinchon.jpg", "nombre": "Chinchón" },
  { "imagen": "../../assets/hotel2.png", "nombre": "Hotel 2" }];
  constructor() { }

  ngOnInit(): void {
  }

}

