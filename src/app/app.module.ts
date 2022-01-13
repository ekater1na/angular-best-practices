import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

import { appRoutes } from './routes'
import { AppComponent }  from './app.component';
import { SignInComponent } from "./users/sign-in.component";
import {RegisterComponent} from "./users/register.component";
import {CoreModule} from "./core/core.module";
import {SharedModule} from "./shared/shared.module";
import { CatalogModule } from './catalog/catalog.module';


@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    SharedModule,
    RouterModule.forRoot(appRoutes),
    CatalogModule
  ],
  declarations: [
    AppComponent,
    RegisterComponent,
    SignInComponent,
  ],
  providers: [],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
