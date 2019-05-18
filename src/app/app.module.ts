import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SurveyComponent } from './survey/survey.component';
import { LoginComponent } from './login/login.component';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PhoneComponent } from './phone/phone.component';


@NgModule({
  declarations: [
    AppComponent,
    SurveyComponent,
    LoginComponent,
    PhoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoadingBarHttpClientModule,
    LoadingBarRouterModule,
    LoadingBarModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
