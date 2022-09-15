import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AuthenticationGuard } from './authentication.guard';
import { LoginComponent } from './login/login.component';
import { LogintemplateComponent } from './logintemplate/logintemplate.component';

const routes: Routes = [
  { path: "", redirectTo: 'login', pathMatch: 'full' },
  {path:"login",component:LoginComponent},
  {path:"admin",component:AdminComponent,canActivate:[AuthenticationGuard]},
  {path:'logintemplate',component:LogintemplateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
