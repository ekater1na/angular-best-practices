import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {RegisterComponent} from './register.component';
import {SignInComponent} from './sign-in.component';

@NgModule({
  declarations: [
    RegisterComponent,
    SignInComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild([
      {path: 'register', component: RegisterComponent,},
      {path: 'sign-in', component: SignInComponent,}
    ]),
    SharedModule
  ]
})
export class UserModule {
}
