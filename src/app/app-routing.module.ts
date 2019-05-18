import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SurveyComponent } from './survey/survey.component';
import { PhoneComponent } from './phone/phone.component';

const routes: Routes = [
  { path: 'phone', component: PhoneComponent },
  { path: 'survey', component: SurveyComponent },
  { path: '', redirectTo: '/phone', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
