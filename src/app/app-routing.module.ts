import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponentComponent } from './login/login-component/login-component.component';
import { UserassessmentsComponent } from './roleUser/userassessments/userassessments.component';
import {UserassessmentsGraphsComponent} from "./roleUser/userassessments-graphs/userassessments-graphs.component";
import {AdminassessmentsComponent} from "./roleUser/adminassessments/adminassessments.component";

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponentComponent },
  { path: 'userassesments', component: UserassessmentsComponent },
  { path: 'adminassesments', component: AdminassessmentsComponent },
  { path: 'userassesments/graph', component: UserassessmentsGraphsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
