import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { moedaDescribe } from 'src/app/models/moedaDescribe.model';
import { MoedasService } from 'src/app/services/moedas.service';
import { RegConvertService } from 'src/app/services/reg-convert.service';

@Component({
  selector: 'app-lista-moedas',
  templateUrl: './lista-moedas.component.html',
  styleUrls: ['./lista-moedas.component.css']
})
export class ListaMoedasComponent implements OnInit {

  listaMoedas: moedaDescribe[] = [];
  displayedColumns: string[] = ['code', 'description'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;


  constructor(
    private moedaService: MoedasService,

    ){

  }

  ngOnInit():void{
    this.getLista();

  }

  //Listagem de moedas
  getLista(){
    try {
      //Requisitar lista de moedas da API.
      this.moedaService.listarMoedas().subscribe((moedas)=>{
        //Converter formatação da lista para permitir amostragem de dados na tela.
        this.listaMoedas = Object.values(moedas.symbols);
        console.log("lista de moedas:")
        console.log(this.listaMoedas)// <---Verificar se moedas está sendo pega na API.
        console.log('tipo da variavel:')
        console.log(typeof(this.listaMoedas))
        //Criação de dados para tabela e paginação.
        this.dataSource = new MatTableDataSource(this.listaMoedas);
        //Aplicando propriedade para paginar a tela.
        this.dataSource.paginator = this.paginator;
        //Aplicando propriedade para alterar ordem de exibição.
        this.dataSource.sort = this.matSort;

      });

    } catch (error) {
      console.log(`Aconteceu um erro, aqui esta: ${error}`)

    }

  };

  //Filtrar pesquisa
  filtroDado($event: any){
    this.dataSource.filter = $event.target.value;

  }

}
