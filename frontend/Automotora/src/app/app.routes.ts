import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio-component/inicio-component';
import { NotFoundComponent } from './pages/not-found-component/not-found-component';
import { EditarVehiculoComponent } from './pages/editar-vehiculo-component/editar-vehiculo-component';

export const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
  },
  {
    path: 'editar',
    component: EditarVehiculoComponent,
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
