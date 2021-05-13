import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  admin = {
    name:'Alfonso',
    surnames:'Vega', 
    email:'alfonso@gmail.com',
    phone:'1234567890'
  }

  users: string[];
  towns: string[];

  constructor() {
    this.users = ['Alfonso Vega', 
                  'David Merle', 
                  'Julian de Pablo', 
                  'Juan Lasso de la Vega', 
                  'Jorge Moreno', 
                  'Ignacio Triguero', 
                  'Javier Merino', 
                  'Carlos Valle', 
                  'Miguel Fernández'];
    
    this.towns = ['Santillana del Mar', 
                  'Trujillo', 
                  'Pedraza',
                  'Chinchón',
                  'Comillas',
                  'Almagro',
                  'Potes',
                  'Guadalupe',
                  'Lerma'];
   }

  ngOnInit(): void {
  }

  jobToday() {
    alert("Scraper de JobToda lanzado!");
  }

  veinteMinutos() {
    alert("Scraper de 20 Minutos lanzado!");
  }

  buscoRestaurantes() {
    alert("Scraper de Busco Restaurantes lanzado!");
  }

  quinceMpedia() {
    alert("Scraper de 15 Mpedia lanzado!");
  }

  editUser() {
    var name = prompt('Introduce el nombre:', '');
    var surnames = prompt('Introduce el apellido:', '')
    console.log(name, surnames);
  }

  editEmail() {
    var email = prompt('Introduce el email:', '');
    console.log(email);
  }

  editPhone() {
    var phone = prompt('Introduce el teléfono:', '');
    console.log(phone);
  }

  deleteUser() {}

}
