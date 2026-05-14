import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio-component/inicio-component';
import { NotFoundComponent } from './pages/not-found-component/not-found-component';
import { EditarVehiculoComponent } from './pages/editar-vehiculo-component/editar-vehiculo-component';
import { LoginComponent } from './pages/login-component/login-component';
import { RegistroComponent } from './pages/registro-component/registro-component';

export const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
  },
  {
    path: 'editar/:idVehiculo',
    component: EditarVehiculoComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'registro',
    component: RegistroComponent,
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
