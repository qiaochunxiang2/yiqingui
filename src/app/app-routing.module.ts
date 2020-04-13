import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {YiqingBodyComponent} from './pages/yiqing-body/yiqing-body.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full', data: {reuse: false, track: false}},
  {path: 'login', component: LoginComponent},
  {path: 'index', loadChildren: () => import('./pages/index/index.module').then(m => m.IndexModule), data: {reuse: false, track: false}},
  {path: 'yiqingIndex', component: YiqingBodyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
