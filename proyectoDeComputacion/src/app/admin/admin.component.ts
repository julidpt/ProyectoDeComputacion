import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';

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

  constructor(private authService: AuthService) {
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

  public trainingProgress: number = 0;

  jobToday() {
    // alert("Scraper de JobToda lanzado!");
    this.authService.searchJobs();
    this.trainingProgress = 100;
    
  }

  veinteMinutos() {
    // alert("Scraper de 20 Minutos lanzado!");
    this.authService.searchNews();
    this.trainingProgress = 100;
  }

  buscoRestaurantes() {
    // alert("Scraper de Busco Restaurantes lanzado!");
    this.authService.serachRestaurants();
    this.trainingProgress = 100;
  }

  quinceMpedia() {
    // alert("Scraper de 15 Mpedia lanzado!");
    this.authService.searchMunicipios();
    this.trainingProgress = 100;
  }

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };

  public barChartLabels: Label[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40, 32, 44, 93 ,55, 72], label: 'Opiniones' },
    { data: [28, 48, 40, 19, 86, 27, 90, 22, 15, 89, 44, 92], label: 'Servicios' }
  ];

  public randomize(): void {
    this.barChartData[0].data = [ Math.round(Math.random() * 100), 59, 80, (Math.random() * 100), 56, (Math.random() * 100), 40, 32, (Math.random() * 100), 93, (Math.random() * 100), 55, ];
  }

}
