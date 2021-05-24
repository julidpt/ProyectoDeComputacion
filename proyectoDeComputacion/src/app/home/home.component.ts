import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { baseUrl } from 'src/environments/environment';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  topTowns: any
  likedTowns: any
  loadingTopTowns: boolean = true
  loadingLikedTowns: boolean = true

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(`${baseUrl}town/getTopTowns`).toPromise().then(response => {
      this.topTowns = response;
      this.loadingTopTowns = false
    })
    console.log(this.topTowns)
    this.http.get(`${baseUrl}town/getLikedTowns`).toPromise().then(response => {
      this.likedTowns = response;
      this.loadingLikedTowns = false
    })
    console.log(this.likedTowns)
  }

  convertImage(array): void {
    for (var i = 0; i < array.length; i++){
      console.log(array[i].image_url)
      if (array[i].image_url === "NULL") {
        array[i].image_url = 'assets/no_image.svg'
      } 
    }
  }
}

