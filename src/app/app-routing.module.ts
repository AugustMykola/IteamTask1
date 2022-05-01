import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponentComponent } from './authorization/login/login-component/login-component.component';
import { UserassessmentsComponent } from './pages/roleUser/userassessments/userassessments.component';
import { UserassessmentsGraphsComponent } from "./pages/roleUser/userassessments-graphs/userassessments-graphs.component";
import { AdminassessmentsComponent } from "./pages/roleUser/adminassessments/adminassessments.component";
import { AuthGuard } from "./core/guards/auth.guard";
import { RoleGuard } from "./core/guards/role.guard";

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponentComponent },
  { path: 'userassesments', component: UserassessmentsComponent, canActivate: [AuthGuard]},
  { path: 'adminassesments', component: AdminassessmentsComponent,canActivate: [AuthGuard, RoleGuard]},
  { path: 'userassesments/graph', component: UserassessmentsGraphsComponent,canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
