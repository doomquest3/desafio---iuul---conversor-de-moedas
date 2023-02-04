import { _isNumberValue } from '@angular/cdk/coercion';
import { Component } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { converter } from 'src/app/models/converter.model';
import { moedaDescribe } from 'src/app/models/moedaDescribe.model';
import { MoedasService } from 'src/app/services/moedas.service';

@Component({
  selector: 'app-converter-moeda',
  templateUrl: './converter-moeda.component.html',
  styleUrls: ['./converter-moeda.component.css']
})
export class ConverterMoedaComponent {

  //Variaveis
  myGroup: FormGroup;
  resultado!: number;
  valor!: number;
  data?: Date;

  //Modelos para preenchimento de dados
  listaMoedas: moedaDescribe[] = [];
  conversor: converter[] =[];

  //Construtor
  constructor(private moedaService: MoedasService){
    this.myGroup = new FormGroup({
      code1:  new FormControl(''),
      code2: new FormControl(''),
      valor: new FormControl(''),
    });
  }

  ngOnInit(): void{
    this.getLista();

  }

  //Método para pegar símbolos
  getLista(){
    try {
      //Requisitar lista de moedas da API.
      this.moedaService.listarMoedas().subscribe((moedas)=>{
        //Converter formatação da lista para permitir amostragem de dados na tela.
        this.listaMoedas = Object.values(moedas.symbols);
        console.log(this.listaMoedas)// <---Verificar se moedas está sendo pega na API.

      });

    } catch (error) {
      console.log(`Aconteceu um erro, aqui esta: ${error}`)

    }

  }

  //Método para validar número
  validar(){
    //Verifica se é um número.
    if(_isNumberValue(Number(this.myGroup.value.valor))){

      //Verifica se esse número é maior que zero.
      if(Number(this.myGroup.value.valor) > 0){
        return true

      }else{
        //Número é menor ou igual a zero.
        alert("Número deve ser maior que zero!");
        return false

      }

    }else{
      //Não é um número
      alert("Não é um número, por favor, escreva um número!");
      return false

    }
  }

  //Método para conversão da moeda - tagA: string, tagB: string, valor: number
  getConvert(){
    console.log(`Este é o formulário que está enviando: ${this.myGroup.value}`)
    //Tag da moeda original.
    let tagA = this.myGroup.value.code1;
    //Tag da moeda para conversão.
    let tagB = this.myGroup.value.code2;

    if(this.validar()){
      //valor da conversão.
      this.valor = Number(this.myGroup.value.valor);

      //Enviando requisição para service.
      this.moedaService.converterMoedas(tagA,tagB).subscribe((response)=>{
        //data da conversão
        this.data = (response.date)

        // valor para conversão
        this.conversor = Object.values(response.info)

        //Valor enviado pela pessoa.
        console.log("quantidade da moeda"+(this.valor));

        //valor da conversão
        console.log(`Você recebeu: ${this.conversor}`);

        this.resultado = this.valor * Number(this.conversor);

      });
    }else{
      alert(`Por favor, refaça o envio do número.`)
    }

  }

}