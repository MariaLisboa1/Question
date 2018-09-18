import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../app/login/login.component'
import { AnswerComponent } from '../app/answer/answer.component'


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'answer', component: AnswerComponent}
]

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}

