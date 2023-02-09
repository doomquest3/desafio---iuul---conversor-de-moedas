import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { historico } from 'src/app/models/historico.model';
import { RegConvertService } from 'src/app/services/reg-convert.service';
import { MessageComponent } from '../message/message.component';



@Component({
  selector: 'app-hist-conversao',
  templateUrl: './hist-conversao.component.html',
  styleUrls: ['./hist-conversao.component.css']
})
export class HistConversaoComponent implements OnInit, AfterViewInit{
  //Armazenar variáveis
  listHistorico: historico[]=[];
  invertListHistorico: historico[]=[];

  //Lista de colunas na tabela.
  displayedColumns: string[] = [
                                'date',
                                'hora',
                                'valorEntrada',
                                'moedaOrigem',
                                'moedaDestino',
                                'taxa',
                                'resultado',
                                'deletar'];


  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatSort) matSort!: MatSort;

  constructor(private regHistorico: RegConvertService,
              public dialog: MatDialog,) {

  }



  ngAfterViewInit(): void {
    this.dataSource.sort = this.matSort;

  }

  ngOnInit():void{
    this.getDados();

  }

  //Método para recuperar dados do localStorage.
  getDados(){
    try {

      this.regHistorico.getDados().subscribe((e)=>{
        this.listHistorico = e;
        console.log(this.listHistorico);
        this.dataSource = new MatTableDataSource(this.listHistorico);

      });


    } catch (error) {
      console.log(error);

    }

  }

  //openDialog(id: number){
  //  alert(`O id é ${id}`)
    //this.dialog.open(DialogElementsExampleDialog);
  //}
  deletar(index: number): void {
    const dialogRef = this.dialog.open(MessageComponent, {
      width: '25rem',
      data:{
        id: index
      }
  });

  dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


}
