import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  // { path: '**', redirectTo: 'home-page' },
  // { path: 'login', component: LoginComponent },
  { path: 'home-page', loadChildren: () => import('./home-page/home-page.module').then(m => m.HomePageModule) },
  { path: 'product-page', loadChildren: () => import('./product-page/product-page.module').then(m => m.ProductPageModule) },
  { path: '**', redirectTo: 'home-page' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
