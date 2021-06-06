import { UsersService } from './../services/users.service';
import { Component, OnInit } from '@angular/core';

import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';
import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y';
import { TownsService } from '../services/towns.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})

export class AdminComponent implements OnInit {
  currentUser: any
  users: any
  topWeekTowns: any
  topTowns: any
  searchedTowns: any = ""

  constructor(private userService: UsersService, private townService: TownsService) {}

  ngOnInit(): void {
    this.userService.getUser()
      .subscribe(
        response => {
          this.currentUser = response;
        })
 
    this.userService.getUsers()
      .subscribe(
        response => {
          this.users = response;
        })

    this.townService.getTopWeekTowns()
      .subscribe(
        response => {
          this.topWeekTowns = response;
        })

    this.townService.getTopTowns()
      .subscribe(
        response => {
          this.topTowns = response;
        })

    this.townService.getSearchedTowns()
      .subscribe(
        response => {
          this.searchedTowns = response;
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
