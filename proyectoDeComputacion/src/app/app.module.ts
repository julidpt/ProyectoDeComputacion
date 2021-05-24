import { AuthService } from './services/auth.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SentimentComponent } from './sentiment/sentiment.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TownComponent } from './town/town.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { ChartsModule } from 'ng2-charts';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SentimentComponent,
    HeaderComponent,
    FooterComponent,
    UserComponent,
    LoginComponent,
    RegisterComponent,
    TownComponent,
    UserComponent,
    AdminComponent,
    ConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    IvyCarouselModule,
    ChartsModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatCheckboxModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
