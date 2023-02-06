import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { historico } from 'src/app/models/historico.model';
import { RegConvertService } from 'src/app/services/reg-convert.service';


@Component({
  selector: 'app-hist-conversao',
  templateUrl: './hist-conversao.component.html',
  styleUrls: ['./hist-conversao.component.css']
})
export class HistConversaoComponent implements OnInit{
  //Armazenar variáveis
  listHistorico: historico[]=[];
  invertListHistorico: historico[]=[];

  //Lista de colunas na tabela.
  displayedColumns: string[] = ['date', 'hora', 'valorEntrada', 'moedaOrigem', 'moedaDestino', 'taxa', 'resultado'];


  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatSort, {static:true}) matSort!: MatSort;

  constructor(
              private regHistorico: RegConvertService) {


  }

  ngOnInit():void{
    this.getDados();

  }

  //Método para recuperar dados do localStorage.
  getDados(){
    try {

      this.regHistorico.getDados().subscribe((e)=>{
        this.listHistorico = e;
      });

      console.log(this.listHistorico);
      console.log("Tipo da variavel:")
      console.log(typeof(this.listHistorico))
      this.dataSource = new MatTableDataSource(this.listHistorico);

      this.dataSource.sort = new MatSort;
    } catch (error) {
      console.log(error);

    }

  }

}
