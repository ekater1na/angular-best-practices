import {Component, Input, Output, EventEmitter} from '@angular/core';
import {IUser} from "../users/user.model";

@Component({
  selector: 'account-menu',
  styleUrls: ['./account-menu.component.css'],
  templateUrl: './account-menu.component.html'
})
export class AccountMenuComponent {
  @Input() user!: IUser;
  @Output() signedOut:EventEmitter<any> = new EventEmitter<any>();
  showMenu:boolean = false;

  signOut() {
    this.showMenu = false;
    this.signedOut.emit();
  }

}
