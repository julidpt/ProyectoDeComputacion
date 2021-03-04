import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sentiment',
  templateUrl: './sentiment.component.html',
  styleUrls: ['./sentiment.component.scss']
})


export class SentimentComponent implements OnInit {
  textareaContent: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  makeRequest() {
    this.http.post('http://127.0.0.1:5000/analisis', { 
      cuerpo: this.textareaContent
    }).toPromise().then(response => {
      console.log(response)
    })
  }


}


