import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user = {
    username:'',
    surnames:'', 
    email:'',
    phone:''
  }

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    // this.authService.user.subscribe(value => {
    //   if (value) {
    //     this.user.id = value.userid;
    //     this.user.username = value.username;
    //   }
    // })
  }
}
