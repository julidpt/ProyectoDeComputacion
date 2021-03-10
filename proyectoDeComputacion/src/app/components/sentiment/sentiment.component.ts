import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sentiment',
  templateUrl: './sentiment.component.html',
  styleUrls: ['./sentiment.component.scss']
})


export class SentimentComponent implements OnInit {
  textareaContent: string = '';
  json: any = false;
  resultado: any;
  textitoresultante: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  makeRequest() {
    this.http.post('http://127.0.0.1:5000/analisis', { 
      cuerpo: this.textareaContent
    }).toPromise().then(response => {
      console.log(response);
      this.json = response;
      if(this.json.compound >= 0.5){
        this.resultado = 'assets/1f642.png';
        this.textitoresultante = "Texto Positivo"
      }
      else if(this.json.compound > -0.5 && this.json.compound < 0.5){
        this.resultado = 'assets/1f610.png';
        this.textitoresultante = "Texto Neutro"
      }
      else if(this.json.compound <= -0.5){
        this.resultado = 'assets/1f622.png';
        this.textitoresultante = "Texto Negativo"
      }
      }
    )
  }
}


