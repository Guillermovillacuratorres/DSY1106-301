import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio-component/inicio-component';
import { NotFoundComponent } from './pages/not-found-component/not-found-component';

export const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
  },
  {
    path: '404',
    component: NotFoundComponent,
  },
  {
    path: '**',
    redirectTo:"404"
  }
];
