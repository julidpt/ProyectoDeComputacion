import { UsersService } from './../services/users.service';
import { Component, OnInit, ViewChild, AfterViewInit  } from '@angular/core';

import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';
import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y';
import { TownsService } from '../services/towns.service';
import { Chart } from 'angular-highcharts';
import { Options } from 'highcharts';

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
  searchedTowns: any = false

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
          console.log(response)
          this.searchedTowns = response;
          
          // console.log(ConvertStringToNumber(this.searchedTowns[0].searches)
          // console.log(this.searchedTowns[1].searches)
          // console.log(this.searchedTowns[2].searches)
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

  donutChartOptions: Options = {
    chart: {
        type: 'pie',
        plotShadow: false,
    },
    credits: {
        enabled: false
    },
    plotOptions: {
        pie: {
            innerSize: '99%',
            borderWidth: 40,
            borderColor: '',
            slicedOffset: 20,
            dataLabels: {
                connectorWidth: 0
            }
        }
    },
    title: {
        verticalAlign: 'middle',
        floating: true,
        text: 'Búsquedas'
    },
    legend: {
        enabled: false,
    },
    series: [
        {
            type: 'pie',
            data: [
                {name: 'Lunes', y: 3, color: '#44394A'},
                {name: 'Martes', y: 3, color: '#E2DC16'},
                {name: 'Miercoles', y: 3, color: '#FF6B16'},
                {name: 'Jueves', y: 3, color: '#0CC931'},
                {name: 'Viernes', y: 3, color: '#5E5AEC'},
                {name: 'Sabado', y: 3, color: '#3DCEBE'},
                {name: 'Domingo', y: 3, color: '#BBB7C6'},
            ]
        }
    ]
  }

  donutChart = new Chart(this.donutChartOptions);

  // public barChartOptions: ChartOptions = {
  //   responsive: true,
  //   scales: { xAxes: [{}], yAxes: [{}] },
  //   plugins: {
  //     datalabels: {
  //       anchor: 'end',
  //       align: 'end',
  //     }
  //   }
  // };

  // public barChartLabels: Label[] = ['', '', '', '', '', '', ''];
  // public barChartType: ChartType = 'bar';
  // public barChartLegend = true;
  // public barChartPlugins = [pluginDataLabels];

  // public barChartData: ChartDataSets[] = [
  //   { data: [ this.lunes, this.martes, this.miercoles, this.jueves, this.viernes, this.sabado, this.domingo ], label: 'Búsquedas' }
  // ];

  // public randomize(): void {
  //   this.barChartData[0].data = [ this.lunes, this.searchedTowns[1].searches, this.searchedTowns[2].searches, this.searchedTowns[3].searches, this.searchedTowns[4].searches, this.searchedTowns[5].searches, this.searchedTowns[6].searches ];
  // }

}

function ConvertStringToNumber(input: string) {
  var numeric = Number(input);
  return numeric;
}


