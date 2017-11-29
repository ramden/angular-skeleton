import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PageNotFoundComponent} from './core/page-not-found/page-not-found.component';
import {CoreModule} from './core/core.module';
import {AuthGuard} from './features/auth/auth.guard';

const routes: Routes = [
  {path: '', loadChildren: 'app/features/home/home.module#HomeModule', canActivate: [AuthGuard]},
  {path: 'login', loadChildren: 'app/features/auth/auth.module#AuthModule'},
  {path: 'register', loadChildren: 'app/features/auth/auth.module#AuthModule'},
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {enableTracing: true}),
    CoreModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
