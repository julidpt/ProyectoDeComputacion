import { TokenInterceptorService } from './services/token-interceptor.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth.guard';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from "@agm/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { EditComponent } from './edit/edit.component';
import { forgotPasswordComponent } from './login/forgot-psswd/forgot-psswd.component';
import { ChangePasswordComponent } from './login/change-password/change-password.component';
import { HighchartsChartModule } from 'highcharts-angular';

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
    ConfirmationComponent,
    EditComponent,
    forgotPasswordComponent,
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDQBd9Kz5c5bDVhsI2M0euX1LAT8vw0ZHg'
    }),
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    IvyCarouselModule,
    ChartsModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    AngularFullpageModule,
    NgxSkeletonLoaderModule,
    HighchartsChartModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
