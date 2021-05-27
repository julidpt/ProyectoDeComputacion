import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from 'src/environments/environment';

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
    surnames:'Vega García', 
    email:'alfonso@gmail.com',
    phone:'1234567890'
  }

  admins: any;

  constructor(private authService: AuthService, private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get(`${baseUrl}user/getUsers`).toPromise().then(response => {
      this.admins = response;
    })
  }

  editUser() {
    var name = prompt('Introduce el nombre:', '');
    var surnames = prompt('Introduce el apellido:', '')
    // console.log(name, surnames);
    // this.http.post(`${baseUrl}user/edit`, ).toPromise().then(response => {})
  }

  editEmail() {
    var email = prompt('Introduce el email:', '');
    console.log(email);
  }

  deleteUser() {
    alert("Usuario borrado")
    // this.authService.userDelete();
  }

  public trainingProgress: number = 0;

  webScraper() {
    // alert("¡Web Scrapers lanzados!");
    this.authService.webScraper();
    this.trainingProgress = 100;
  }

  public barChartOptions: ChartOptions = {
    responsive: true,
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
