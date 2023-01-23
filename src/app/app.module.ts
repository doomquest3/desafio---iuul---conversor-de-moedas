import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PagPrincipalComponent } from './components/pag-principal/pag-principal.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PagPrincipalComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
