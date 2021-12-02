import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ApiComponent } from './api/api.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { AgGridComponent } from './ag-grid/ag-grid.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './shared/guard/auth.guard';
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'employee-dashboard', component: EmployeeDashboardComponent,canActivate:[AuthGuard] },
  {path:'api',component:ApiComponent,canActivate:[AuthGuard]},
  {path:'ag-grid',component:AgGridComponent,canActivate:[AuthGuard]},
  {path:'home',component:HomeComponent,canActivate:[AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
