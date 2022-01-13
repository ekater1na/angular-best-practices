import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavBarComponent} from "./nav-bar.component";
import {UserRepositoryService} from "./user-repository.service";
import {AccountMenuComponent} from "./account-menu.component";
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    NavBarComponent,
    AccountMenuComponent
  ],
  exports: [
    NavBarComponent,
    AccountMenuComponent
  ],
  imports: [CommonModule, RouterModule],
  providers: [UserRepositoryService],
})
export class CoreModule {
}
