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
  listHistorico: Array<historico>;

  //Lista de colunas na tabela.
  displayedColumns: string[] = [
                                'data',
                                'hora',
                                'valor',
                                'moedaOrigem',
                                'moedaDestino',
                                'taxa',
                                'resultado'];

  dataSource!: MatTableDataSource<any>;

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;

  constructor(
              private regHistorico: RegConvertService) {
    this.listHistorico = [];

  }

  ngOnInit(){
    this.recuperarDados();

  }


  //Método para recuperar dados do localStorage.
  recuperarDados(){
    //Recuperando dados da localStorage.
    this.listHistorico = this.regHistorico.getDados();
    //console.log(`Valores recebidos`+this.listHistorico)

  }

}
