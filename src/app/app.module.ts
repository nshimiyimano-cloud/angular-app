import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent, CustomSnackBarComponent } from './app.component';
import { courseComponent } from './course.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule } from './material/material.module';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';

import {ScrollingModule} from "@angular/cdk/scrolling";
import { FormBuilder, FormGroup, FormGroupName, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeCreateComponent } from '../app/employee-create/employee-create.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';


import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { SummaryPipe } from './summary.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { HomeComponent } from './home/home.component';
import { AuthconfigInterceptor } from './shared/authconfig.interceptor';
import { SigninComponent } from './signin/signin.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { UserProfileComponent } from './user-profile/user-profile.component';


//import {CdkTableModule} from '@angular/cdk/table'


//import {FormsModule,ReactiveFormsModule} from '@angular/forms';


//to check if work let use mat button



/* import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar'; */

/* const mat = [
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatToolbarModule,
];
 */




@NgModule({
  declarations: [
   // CdkTableModule,  //for material table
    AppComponent,
    courseComponent,
    CustomSnackBarComponent,
    DialogExampleComponent,
    EmployeeCreateComponent,
    EmployeeEditComponent,
    EmployeeListComponent,
    SummaryPipe,
    FavoriteComponent,
    PanelComponent,
    LikeComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    SignupFormComponent,
    NewCourseFormComponent,
    ChangePasswordComponent,
    HomeComponent,
    SigninComponent,
    CreateAccountComponent,
    UserProfileComponent
  ],
  entryComponents:[ CustomSnackBarComponent,DialogExampleComponent],
  imports: [

    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ScrollingModule,
    FormsModule,
HttpClientModule,

 ReactiveFormsModule,
 CommonModule,


AppRoutingModule








  ],
 exports:[AppRoutingModule],


  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthconfigInterceptor,
      multi:true
    }
  ],


  bootstrap: [AppComponent]
})
export class AppModule { }
