import {NgModule} from '@angular/core';
import {CatalogComponent} from "./catalog.component";
import {SharedModule} from "../shared/shared.module";
import {CoreModule} from "../core/core.module";
import {CatalogRepositoryService} from "./catalog-repository.service";
import {RouterModule} from "@angular/router";
import {FilterClassesService} from './filter-classes.service';
import {OrderByPipe} from './order-by.pipe';


@NgModule({
  declarations: [CatalogComponent, OrderByPipe],
  exports: [CatalogComponent],
  imports: [
    SharedModule,
    CoreModule,
    RouterModule
  ],
  providers: [CatalogRepositoryService, FilterClassesService]
})
export class CatalogModule { }
