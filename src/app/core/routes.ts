import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {LoginComponent} from '../main/login/login.component';

export const routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'},
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];
