import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { baseUrl } from 'src/environments/environment';

@Component({
  selector: 'app-town',
  templateUrl: './town.component.html',
  styleUrls: ['./town.component.scss']
})
export class TownComponent implements OnInit {
  town = ""
  townData: any
  loading: boolean = true

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.town = this.route.snapshot.params.town
    this.http.get(`${baseUrl}town/getTown/${this.route.snapshot.params.town}`).toPromise().then(response => {
      this.townData = response;
      this.loading = false
    })
  }

  // getPunct()
}
