import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SurveyComponent } from './survey/survey.component';
import { PhoneComponent } from './phone/phone.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'phone', component: PhoneComponent },
  { path: 'survey', component: SurveyComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
