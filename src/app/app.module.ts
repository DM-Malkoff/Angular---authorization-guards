import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthorizationComponent} from './components/authorization/authorization.component';
import {AuthLayoutComponent} from './layouts/auth-layout/auth-layout.component';
import {SiteLayoutComponent} from './layouts/site-layout/site-layout.component';
import {SignUpComponent} from './components/sign-up/sign-up.component';
import {InnerComponent} from './components/inner/inner.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {AuthFormComponent} from './components/auth-form/auth-form.component';
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    AuthorizationComponent,
    AuthLayoutComponent,
    SiteLayoutComponent,
    SignUpComponent,
    InnerComponent,
    AuthFormComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
