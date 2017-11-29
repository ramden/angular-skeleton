import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {AuthGuard} from './auth.guard';
import {AuthRoutingModule} from './auth-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {AuthenticationService} from './authentication.service';
import {UserService} from './user.service';
import {SharedModule} from '@app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    SharedModule
  ],
  declarations: [LoginComponent, RegisterComponent],
  providers: [
    AuthGuard,
    AuthenticationService,
    UserService
  ]
})
export class AuthModule { }
