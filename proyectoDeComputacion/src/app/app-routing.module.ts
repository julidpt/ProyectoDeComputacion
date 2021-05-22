import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { SentimentComponent } from './sentiment/sentiment.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TownComponent } from './town/town.component';
import { UserComponent } from './user/user.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';

const routes: Routes = [
  {
    path: '', 
    component: HomeComponent
  },
  {
    path: 'sentiment', 
    component: SentimentComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'town/:town',
    component: TownComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'search/:town',
    component: TownComponent
  },
  {
    path: 'confirmation',
    component: ConfirmationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
