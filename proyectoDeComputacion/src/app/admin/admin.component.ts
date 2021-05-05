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

}
