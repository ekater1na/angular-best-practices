import {Component} from '@angular/core'

@Component({
  selector: 'loading-spinner',
  template: '<img *ngIf="loading" alt="spinner" src="../../assets/images/loading.gif" />',
  inputs: ['loading']
})
export class LoadingSpinnerComponent {
  loading:boolean = false;
}