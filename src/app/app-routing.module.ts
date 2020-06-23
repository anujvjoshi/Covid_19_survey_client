import { SuccessComponent } from './success/success.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './services/auth-gaurd.service';
import { LoginComponent } from './login/login.component';
import { QuestionsListComponent } from './questions-list/questions-list.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
   { path: '', redirectTo: 'login', pathMatch: 'full' },
   { path: 'formDetails', component: QuestionsListComponent, canActivate: [AuthGaurdService]},
   { path: 'login', component: LoginComponent},
   { path: 'logout', component: LogoutComponent},
   { path: 'success', component: SuccessComponent},
   { path: '**', component: LoginComponent, canActivate: [AuthGaurdService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
