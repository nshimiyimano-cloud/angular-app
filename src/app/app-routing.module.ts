import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {Routes,ActivatedRoute ,RouterModule} from "@angular/router"
import { EmployeeCreateComponent } from '../app/employee-create/employee-create.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { courseComponent } from './course.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { HomeComponent } from './home/home.component';
import { PanelComponent } from './panel/panel.component';
import { AuthGuard } from './shared/auth.guard';
import { SigninComponent } from './signin/signin.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { UserProfileComponent } from './user-profile/user-profile.component';








const routes: Routes = [
  { path: '', redirectTo: '/log-in', pathMatch: 'full' },


  { path: 'employee-list', component: EmployeeListComponent,canActivate:[AuthGuard]},
  { path: 'addEmployee', component: EmployeeCreateComponent,canActivate:[AuthGuard]},
  { path: 'edit-employee/:firstName/:id/:location', component: EmployeeEditComponent,canActivate:[AuthGuard] },
  {path:'favoritetrain',component:FavoriteComponent},
  {path:'panel',component:PanelComponent},
  {path:'signup',component:SignupFormComponent},
  {path:'log-in',component:SigninComponent},
  {path:'sign-up',component:CreateAccountComponent},
  {path:'courses',component:courseComponent},

  {path:'user-profile/:id',component:UserProfileComponent,canActivate:[AuthGuard]},
  {path:'changePassword',component:ChangePasswordComponent},
  {path:'contact',component:ContactFormComponent},
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes/* , { enableTracing: true } */),CommonModule],
  exports: [RouterModule]
})

export class AppRoutingModule { }
/*  */
