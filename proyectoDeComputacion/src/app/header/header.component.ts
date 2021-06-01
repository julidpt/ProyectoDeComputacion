import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from 'src/environments/environment';
import { Observable, OperatorFunction } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  fieldSearch: string = '';
  json: any;
  townsList: [{id: string, name: string}] | [] = []
  // @ViewChild(componente hijo) child: componente hijo

  text!: string;

  constructor(private authService: AuthService, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.http.get(`${baseUrl}town/getTowns`).toPromise().then(response => {
      this.townsList = response as [{id: string, name: string}]
    })

    this.exit()
  }

  filterTowns: OperatorFunction<any, any> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => this.townsList.filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1).map(town => town.name).slice(0, 10))
    )

  getTown() {
    for (var i = 0; i < this.townsList.length; i++){
      if (this.fieldSearch === this.townsList[i].name) {
        var town = this.townsList[i].id
        this.router.navigate(['town/', town])
      } 
    }
  }

  search() {
    this.http.post(`${baseUrl}search`, { 
      text: this.fieldSearch
    }).toPromise().then(response => {
      console.log(response);
      this.json = response;

      }
    )
  }

  exit() {
    if (this.authService.loggedIn()) {
      this.text = "Cerrar Sesión";
      this.authService.userLogout();
      // this.router.navigate(['/']);
    } else {
      this.text = "Iniciar Sesión";
      this.router.navigate(['/login']);
    }
  }
}
