import { Component, OnInit } from '@angular/core';
import { moedaDescribe } from 'src/app/models/moedaDescribe.model';
import { MoedasService } from 'src/app/services/moedas.service';

@Component({
  selector: 'app-lista-moedas',
  templateUrl: './lista-moedas.component.html',
  styleUrls: ['./lista-moedas.component.css']
})
export class ListaMoedasComponent implements OnInit {

  listaMoedas?: moedaDescribe[];

  constructor(
    private moedaService: MoedasService

    ){

  }

  ngOnInit():void{
    this.getLista();

  }

  getLista(){
    try {
      this.moedaService.listarMoedas().subscribe((moedas)=>{
        this.listaMoedas = moedas.symbols;
        console.log(this.listaMoedas)

      });

    } catch (error) {
      console.log(`Aconteceu um erro, aqui esta: ${error}`)

    }

  };

}
