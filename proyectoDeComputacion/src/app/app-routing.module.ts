import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministradorComponent } from './administrador/administrador.component';
import { HomeComponent } from './home/home.component';
import { PuebloComponent } from './pueblo/pueblo.component';
import { SentimentComponent } from './sentiment/sentiment.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

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
    path: 'usuario',
    component: UsuarioComponent
  },
  {
    path: 'pueblo',
    component: PuebloComponent
  },
  {
    path: 'admin',
    component: AdministradorComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
