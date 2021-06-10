import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TownsService } from '../services/towns.service';
import { AgmMap } from "@agm/core";
import { ViewChild } from '@angular/core';
import { AuthService } from '../services/auth.service'

@Component({
  selector: 'app-town',
  templateUrl: './town.component.html',
  styleUrls: ['./town.component.scss']
})


export class TownComponent implements OnInit {
  townData: any
  liked: boolean = false
  loading: boolean = true

  constructor(private route: ActivatedRoute, private townService: TownsService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if (this.authService.loggedIn()) {
      this.townService.getUserLikedTown(this.route.snapshot.params.town)
        .subscribe(
          response => {
            this.liked = true
            this.getTownData()
          },
          error => {
            this.liked = false
            this.getTownData()
          })
    } else {
      this.getTownData()
    }
  }

  getTownData() {
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
          this.liked = true
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

  dislike(): void {
    this.townService.dislikeTown(this.townData.id_town)
      .subscribe(
        response => {
          this.liked = false
          console.log('ok')
        });
  }
}
