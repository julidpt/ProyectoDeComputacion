import { Component, OnInit } from '@angular/core';
import { TownsService } from '../services/towns.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: any
  likedTowns: any
  loading: boolean = true

  constructor(private userService: UsersService, private townService: TownsService) {}

  ngOnInit(): void {
    this.userService.getUser()
      .subscribe(
        response => {
          this.user = response;
        })

    this.townService.getUserLikedTowns()
      .subscribe(
        response => {
          this.likedTowns = response;
          this.loading = false
        })
  }
}
