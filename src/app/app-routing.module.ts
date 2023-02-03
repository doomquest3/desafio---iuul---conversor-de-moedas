import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConverterMoedaComponent } from './components/converter-moeda/converter-moeda.component';
import { ListaMoedasComponent } from './components/lista-moedas/lista-moedas.component';
import { PagPrincipalComponent } from './components/pag-principal/pag-principal.component';

const routes: Routes = [
  {path:'', component: PagPrincipalComponent},
  {path:'list', component: ListaMoedasComponent},
  {path:'convert', component: ConverterMoedaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
