import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { converter } from '../models/converter.model';
import { historico } from '../models/historico.model';

@Injectable({
  providedIn: 'root'
})

export class RegConvertService {

  //Objeto para armazenagem na local storage
  private ArrayObj!: Observable<historico[]>;

  private ArrayHistorico:Array<historico> = [];
  //Variável para recebimento de dados.
  private objHistorico: historico = new historico;

  constructor() {

  }

  //Função para armazenar dados
  setDados(
            valorEntrada: number,
            moedaOrigem: string,
            resultado: number,
            moedaDestino: string,
            taxa: number,
            maiorMenor: boolean
  ):void{
    //Verifica se existe a chave do localStorage;
    let cond = this.verificaStorage();

      this.objHistorico.date = new Date().toLocaleDateString(
        'pt-br',{
        day:'numeric',
        month:'numeric',
        year:'numeric'});
      this.objHistorico.hora = new Date().toLocaleTimeString(navigator.language,{
        hour: '2-digit',
        minute:'2-digit',
        second:'2-digit'});
      this.objHistorico.valorEntrada = String(valorEntrada);
      this.objHistorico.moedaOrigem = moedaOrigem;
      this.objHistorico.moedaDestino = moedaDestino;
      this.objHistorico.resultado = String(resultado);
      this.objHistorico.taxa = String(taxa);
      this.objHistorico.maiorDolar = maiorMenor;

    if(cond){

      //Recupera o Array salvo na chave histórico
      this.ArrayHistorico = JSON.parse(localStorage.getItem("historico") || '');

      if(this.ArrayHistorico.indexOf(this.objHistorico) == -1){
        this.objHistorico.id = Number(this.ArrayHistorico.length);
        //Armazenar no localStorage.
        this.ArrayHistorico.push(this.objHistorico);
        localStorage.setItem('historico', JSON.stringify(this.ArrayHistorico));

        //Avisa no console que foi salvo.
        console.log(`Armazenamento concluído`);
        console.log(this.ArrayHistorico);
        this.getDados();

      }
    }else{
      this.objHistorico.id = 0;
      //Caso a localStorage não existe, então seria criado uma.
      this.ArrayHistorico.push(this.objHistorico);
      localStorage.setItem('historico', JSON.stringify(this.ArrayHistorico));

    }

  }

  //Função para recuperar dados.
   getDados():Observable<any>{
    if(this.verificaStorage()){
      return this.ArrayObj = of(JSON.parse(localStorage.getItem('historico') || ''));
      //console.log(`Função de retorno do array`)
      //console.log(this.ArrayObj);
      //console.log(`Transformado em objeto`);
      //console.log(of(this.ArrayObj))
      //return this.ArrayObj;

    }else{
      console.log(`Storage não existe`)
      return this.ArrayObj;

    }

  }

  //Verifica se a session storage existe.
  verificaStorage(){
    const item = (localStorage.getItem('historico')!==null);

    if(item){
      return true;

    }else{
      return false;

    }

  }

  //Excluir linha do histórico.
  excluirCelula(index: number){
    this.ArrayHistorico = JSON.parse(localStorage.getItem("historico") || '');
    const novaLista = this.ArrayHistorico.findIndex((obj)=> obj.id === index);
    this.ArrayHistorico.splice(novaLista, 1);

    localStorage.setItem('historico', JSON.stringify(this.ArrayHistorico));
    alert(`Item deletado com sucesso!`)

  }

}
