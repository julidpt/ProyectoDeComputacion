import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TownsService } from '../services/towns.service';

@Component({
  selector: 'app-town',
  templateUrl: './town.component.html',
  styleUrls: ['./town.component.scss']
})
export class TownComponent implements OnInit {
  townData: any
  loading: boolean = true

  constructor(private route: ActivatedRoute, private townService: TownsService) { }

  ngOnInit(): void {
    this.townService.getTown(this.route.snapshot.params.town)
      .then(
        response => {
          console.log()
          this.townData = response;
          this.loading = false
          console.log(this.townData)
          console.log(this.loading)
        })
  }

  like(): void {
    this.townService.likeTown(this.townData.id_town)
      .subscribe(
        response => {
          console.log('ok')
        });
  }
}