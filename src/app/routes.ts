import { Routes } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';

export const appRoutes : Routes = [
  { path: 'catalog', component: CatalogComponent, },
  { path: 'user',
    loadChildren: () => import('./users/user.module').then(m => m.UserModule)
  },
];
