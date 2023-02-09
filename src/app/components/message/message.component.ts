import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { RegConvertService } from 'src/app/services/reg-convert.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit{

  constructor(
              public dialogRef: MatDialogRef<MessageComponent>,
              private regHistorico: RegConvertService,
              @Inject(MAT_DIALOG_DATA) public data: any) {

  }
  ngOnInit(): void {

  }

  //Cancelar deletar item.
  cancelar(): void {
    this.dialogRef.close();

  }

  //Deletar item.
  deletar():void{
    //alert(`O id é ${this.data.id}`)
    this.regHistorico.excluirCelula(this.data.id);

    this.dialogRef.close();

  }
}
