import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { historico } from 'src/app/models/historico.model';
import { RegConvertService } from 'src/app/services/reg-convert.service';


@Component({
  selector: 'app-hist-conversao',
  templateUrl: './hist-conversao.component.html',
  styleUrls: ['./hist-conversao.component.css']
})
export class HistConversaoComponent implements OnInit{
  //Armazenar variáveis
  listHistorico: historico[]= [];
  dataSource!: MatTableDataSource<any>;
  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;

  //Lista de colunas na tabela.
  displayedColumns: string[] = [
                                'data',
                                'hora',
                                'valor',
                                'moedaOrigem',
                                'moedaDestino',
                                'taxa',
                                'resultado'];




  constructor(
              private regHistorico: RegConvertService) {
    this.listHistorico = [];

  }

  ngOnInit():void{
    this.recuperarDados();

  }

  //Método para recuperar dados do localStorage.
  recuperarDados(){
    try {
      //Recuperando dados da localStorage.
      this.regHistorico.getDados().subscribe((resp)=>{
        this.listHistorico = Object.values(resp);
        //Verificar se recebemos a lista
        console.log(`Lista recebida no typescript:`)
        console.log(this.listHistorico);

        //Armazenar lista como variavel da tabela.
        this.dataSource = new MatTableDataSource(this.listHistorico);
        //Aplicando propriedade para paginar a tela.
        this.dataSource.paginator = this.paginator;
        //Aplicando propriedade para alterar ordem de exibição.
        this.dataSource.sort = this.matSort;

      });


    } catch (error) {
      console.log(error);

    }



  }

}
