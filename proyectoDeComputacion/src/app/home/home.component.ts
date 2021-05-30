import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { baseUrl } from 'src/environments/environment';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Observable, OperatorFunction } from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [NgbCarouselConfig]
})
export class HomeComponent implements OnInit {
  topTowns: any
  likedTowns: any
  fieldSearch: string = '';
  loadingTopTowns: boolean = true
  loadingLikedTowns: boolean = true
  showNavigationArrows = false;
  showNavigationIndicators = false;
  townsList: [{id_town: string, name: string}] | [] = [] 

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router, config: NgbCarouselConfig) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }

  ngOnInit(): void {
    this.http.get(`${baseUrl}town/getTowns`).toPromise().then(response => {
      this.townsList = response as [{id_town: string, name: string}]
    })
    this.http.get(`${baseUrl}town/getTopWeekTowns`).toPromise().then(response => {
      this.topTowns = response;
      this.loadingTopTowns = false
    })
    this.http.get(`${baseUrl}town/getLikedTowns`).toPromise().then(response => {
      this.likedTowns = response;
      this.loadingLikedTowns = false
    })
  }

  getTown() {
    for (var i = 0; i < this.townsList.length; i++){
      if (this.fieldSearch === this.townsList[i].name) {
        var town = this.townsList[i].id_town
        this.router.navigate(['town/', town])
      } 
    }
  }

  filterTowns: OperatorFunction<any, any> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => this.townsList.filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1).map(town => town.name).slice(0, 10))
    )

  convertImage(array): void {
    for (var i = 0; i < array.length; i++){
      console.log(array[i].image_url)
      if (array[i].image_url === "NULL") {
        array[i].image_url = 'assets/no_image.jpg'
      } 
    }
  }

  redirectTown(id){
    this.router.navigate(['town/', id])
  }
}

