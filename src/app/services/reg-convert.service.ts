import { Injectable } from '@angular/core';
import { historico } from '../models/historico.model';

@Injectable({
  providedIn: 'root'
})

export class RegConvertService {

  //Objeto para armazenagem na local storage
  private ArrayObj:any[] = [];

  private obsArray: Array<historico> = [];

  private objHistorico: historico = new historico;

  constructor() {}

  //Gerar chaves
  private gerarChave(){
    return String(localStorage.length + 1);

  }

  //Função para armazenar dados
  setDados(
            valorEntrada: number,
            moedaOrigem: string,
            resultado: number,
            moedaDestino: string,
            taxa: number
  ):void{

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

    //Armazenar no localStorage.
    localStorage.setItem(this.gerarChave(), JSON.stringify(this.objHistorico));
    console.log(`Armazenamento concluído`+this.objHistorico)

  }

  //Função para recuperar dados.
  getDados(){


    //Pegar chaves do localStorage
    let keys = Object.keys(localStorage);
    console.log(`Chaves do local storage:${keys}`)
    //Definindo variavel como tamanho da quantidade de itens da localStorage.
    for(let i of keys){

      if(localStorage.getItem(i)==null){
        console.log(`Erro! Não há dados na variável: ${i}`);

      }else{
        let item = JSON.parse(localStorage.getItem(i) || '');
        this.ArrayObj.push(item);

      }

    }

    console.log(`Array de objetos sendo enviados:`)
    console.log(this.ArrayObj);
    return this.ArrayObj;

  }

}
