import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { ShareModule } from '@share/share.module'
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '@core/core.module';


@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    CoreModule,
    ShareModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
