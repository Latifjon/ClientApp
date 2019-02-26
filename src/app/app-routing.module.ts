import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainContainerComponent } from './Components/main-container/main-container.component';
import {LoginFormComponent} from './Components/Enter-Forms/login-form/login-form.component';
import {RegistrationFormComponent} from './Components/Enter-Forms/registration-form/registration-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  {path: 'user', component: MainContainerComponent},
  {path: 'login', component: LoginFormComponent},
  {path: 'register', component: RegistrationFormComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
