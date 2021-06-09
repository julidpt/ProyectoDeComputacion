import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TownsService } from '../services/towns.service';
import { AgmMap } from "@agm/core";
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-town',
  templateUrl: './town.component.html',
  styleUrls: ['./town.component.scss']
})


export class TownComponent implements OnInit {

  townData: any
  loading: boolean = true


  constructor(private route: ActivatedRoute, private townService: TownsService, private router: Router) {

   }

  ngOnInit(): void {
    this.townService.getTown(this.route.snapshot.params.town)
      .subscribe(
        response => {
          this.townData = response;
          this.loading = false
        })
      }

  like(): void {
    this.townService.likeTown(this.townData.id_town)
      .subscribe(
        response => {
          console.log('ok')
        },
        error => {
          if (error.status == 500) {
            console.log(error.status)
          } else {
            this.router.navigate(['login'])
          }
        });
  }
}
