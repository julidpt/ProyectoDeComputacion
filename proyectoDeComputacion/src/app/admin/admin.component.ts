import { UsersService } from './../services/users.service';
import { Component, OnInit } from '@angular/core';
import { TownsService } from '../services/towns.service';
import { Chart } from 'angular-highcharts';
import { Options, reduce } from 'highcharts';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})

export class AdminComponent implements OnInit {
  currentUser: any
  users: any
  admins: any
  topWeekTowns: any
  topTowns: any
  searchedTowns: any = false

  loading: boolean = true

  constructor(private userService: UsersService, private townService: TownsService) { }

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
    this.userService.getAdmins()
      .subscribe(
        response => {
          this.admins = response;
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
          this.loading = false
          console.log(response)
          this.searchedTowns = response;

          console.log(this.searchedTowns[0].searches)
          console.log(this.searchedTowns[1].searches)
          console.log(this.searchedTowns[2].searches)
          console.log(this.searchedTowns[3].searches)
          console.log(this.searchedTowns[4].searches)
          console.log(this.searchedTowns[5].searches)
          console.log(this.searchedTowns[6].searches)
        })
<<<<<<< Updated upstream
  }

  editUser() {
    var name = prompt('Introduce el nombre:', '');
    var surnames = prompt('Introduce el apellido:', '')
    console.log(name, surnames);
    // this.http.post(`${baseUrl}user/edit`, name && surnames).toPromise().then(response => {})
=======
>>>>>>> Stashed changes
  }

  deleteUser(id_user) {
    this.userService.deleteUser(id_user).subscribe()
  }
  
  setAdmin (id_user) {
    this.userService.setAdmin(id_user).subscribe()
  }

  areaChartOptions: Options = {
    chart: {
      styledMode: false,
    },
    plotOptions: {
      series: {
        marker: {
          enabled: false,
        }
      }
    },
    legend: {
      enabled: false,
    },
    credits: {
      enabled: false,
    },
    title: {
      text: 'Búsquedas esta semana',
    },
    yAxis: {
      visible: true,
    },
    xAxis: {
      visible: true,
      categories: [
        'Lunes',
        'Martes',
        'Miercoles',
        'Jueves',
        'Viernes',
        'Sábado',
        'Domingo',
      ],
    },
    defs: {
      gradient0: {
        tagName: 'linearGradient',
        id: 'gradient-0',
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 0,
        children: [
          {
            tagName: 'stop ',
            offset: 0

          },
          {
            tagName: 'stop',
            offset: 0
          }
        ]
      }
    } as any,
    series: [
      {
        color: '#3FB0CA',
        type: 'areaspline',
        keys: ['y', 'selected'],
        data: [
          [1, false],
          [3, false],
          [5, false],
          [4, false],
          [6, false],
          [4, false],
          [2, false],
          // [this.searchedTowns[0].searches, false],
          // [this.searchedTowns[1].searches, false],
          // [this.searchedTowns[2].searches, false],
          // [this.searchedTowns[3].searches, false],
          // [this.searchedTowns[4].searches, false],
          // [this.searchedTowns[5].searches, false],
          // [this.searchedTowns[6].searches, false],
        ]
      }
    ]
  };

  areaChart = new Chart(this.areaChartOptions);

  // donutChartOptions: Options = {
  //   chart: {
  //       type: 'pie',
  //       plotShadow: false,
  //   },
  //   credits: {
  //       enabled: false
  //   },
  //   plotOptions: {
  //       pie: {
  //           innerSize: '99%',
  //           borderWidth: 40,
  //           borderColor: '',
  //           slicedOffset: 20,
  //           dataLabels: {
  //               connectorWidth: 0
  //           }
  //       }
  //   },
  //   title: {
  //       verticalAlign: 'middle',
  //       floating: true,
  //       text: 'Búsquedas'
  //   },
  //   legend: {
  //       enabled: false,
  //   },
  //   series: [
  //       {
  //           type: 'pie',
  //           data: [
  //               {name: 'Lunes', y: 3, color: '#44394A'},
  //               {name: 'Martes', y: 3, color: '#E2DC16'},
  //               {name: 'Miercoles', y: 3, color: '#FF6B16'},
  //               {name: 'Jueves', y: 3, color: '#0CC931'},
  //               {name: 'Viernes', y: 3, color: '#5E5AEC'},
  //               {name: 'Sabado', y: 3, color: '#3DCEBE'},
  //               {name: 'Domingo', y: 3, color: '#BBB7C6'},
  //           ]
  //       }
  //   ]
  // }

  // donutChart = new Chart(this.donutChartOptions);

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
