import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

//Componentes
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PagPrincipalComponent } from './components/pag-principal/pag-principal.component';
import { ListaMoedasComponent } from './components/lista-moedas/lista-moedas.component';
import { ConverterMoedaComponent } from './components/converter-moeda/converter-moeda.component';

//Angular Material
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';

import { HttpClientModule } from '@angular/common/http';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { HistConversaoComponent } from './components/hist-conversao/hist-conversao.component';
import { MessageComponent } from './components/message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PagPrincipalComponent,
    ListaMoedasComponent,
    ConverterMoedaComponent,
    HistConversaoComponent,
    MessageComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatListModule,
    MatMenuModule,
    MatInputModule,
    MatIconModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,


  ],
  exports:[
    NavBarComponent,

  ],
  providers: [MatDialogRef, MatTableDataSource],
  bootstrap: [AppComponent],
  entryComponents:[HistConversaoComponent]

})
export class AppModule { }
