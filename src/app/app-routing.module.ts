import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthLayoutComponent} from "./layouts/auth-layout/auth-layout.component";
import * as path from "path";
import {AuthorizationComponent} from "./components/authorization/authorization.component";
import {SignUpComponent} from "./components/sign-up/sign-up.component";
import {InnerComponent} from "./components/inner/inner.component";
import {SiteLayoutComponent} from "./layouts/site-layout/site-layout.component";
import {AuthGuard} from "./guards/auth.guard";

const routes: Routes = [
  {
    path:'', component: AuthLayoutComponent, children: [
      {path: '', redirectTo: '/login', pathMatch: 'full'},
      {path:'login', component: AuthorizationComponent},
      {path:'sign-up', component: SignUpComponent},
    ]
  },
  {
    path:'', component: SiteLayoutComponent, canActivate: [AuthGuard], children: [
      {path: '', redirectTo: '/inner', pathMatch: 'full'},
      {path:'inner', component: InnerComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
