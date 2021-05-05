import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  user = {
    name:'Alfonso',
    surnames:'Vega', 
    email:'alfonso@gmail.com',
    phone:'1234567890'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
