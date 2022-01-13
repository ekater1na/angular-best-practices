import { NgModule } from '@angular/core';
import {CatalogComponent} from "./catalog.component";
import {SharedModule} from "../shared/shared.module";
import {CoreModule} from "../core/core.module";
import {CatalogRepositoryService} from "./catalog-repository.service";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [CatalogComponent],
  exports: [CatalogComponent],
  imports: [
    SharedModule,
    CoreModule,
    RouterModule
  ],
  providers: [CatalogRepositoryService]
})
export class CatalogModule { }
