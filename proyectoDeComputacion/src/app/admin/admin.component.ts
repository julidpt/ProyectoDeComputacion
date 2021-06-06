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
  // admin = {
  //   name:'Alfonso',
  //   surnames:'Vega García', 
  //   email:'alfonso@gmail.com',
  //   phone:'1234567890'
  // }

  currentUser: any
  users: any
  topWeekTowns: any
  topTowns: any
  searchedTowns: any = ""

  constructor(private authService: AuthService, private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get(`${baseUrl}user/getUser`).toPromise().then(response => {
      this.currentUser = response;
    })
 
    this.http.get(`${baseUrl}user/getUsers`).toPromise().then(response => {
      console.log(response)
      this.users = response;
    })

    this.http.get(`${baseUrl}town/getTopWeekTowns`).toPromise().then(response => {
      this.topWeekTowns = response;
      console.log(response)
    })

    this.http.get(`${baseUrl}town/getTopTowns`).toPromise().then(response => {
      this.topTowns = response;
    })

    this.http.get(`${baseUrl}town/getSearchedTowns`).toPromise().then(response => {
      console.log(response)
      this.searchedTowns = response;
      console.log(this.searchedTowns[0])
      console.log(this.searchedTowns[1])
    })

  }

  editUser() {
    var name = prompt('Introduce el nombre:', '');
    var surnames = prompt('Introduce el apellido:', '')
    console.log(name, surnames);
    // this.http.post(`${baseUrl}user/edit`, name && surnames).toPromise().then(response => {})
  }

  editEmail() {
    var email = prompt('Introduce el email:', '');
    console.log(email);
  }

  deleteUser() {
    alert("Usuario borrado")
    // this.http.delete(`${baseUrl}user/delete/:id`, ).toPromise().then(response => {})
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

  public barChartLabels: Label[] = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40, 32, 44, 93 ,55, 72], label: 'Búsquedas' },
    { data: [this.searchedTowns[0], this.searchedTowns[1], this.searchedTowns[2], this.searchedTowns[3], this.searchedTowns[4], this.searchedTowns[5], this.searchedTowns[6]], label: 'Búsquedas' }
  ];

  public randomize(): void {
    this.barChartData[0].data = [ Math.round(Math.random() * 100), 59, 80, (Math.random() * 100), 56, (Math.random() * 100), 40, 32, (Math.random() * 100), 93, (Math.random() * 100), 55, ];
  }

}
