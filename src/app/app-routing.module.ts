import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '', redirectTo: '404', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  // { path: '404', component: PageNotFoundComponent },
  {
    path: '',
    component: MainLayoutComponent, canActivate: [],
    children: [
      {
        path: 'home',
        component: HomeComponent,
        canActivate: [],
        data: { title: 'Home'}
      }
    ]
  },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
