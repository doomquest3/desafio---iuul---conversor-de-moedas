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

  //Método para conversão da moeda - tagA: string, tagB: string, valor: number
  getConvert(){
    console.log(`Este é o formulário que está enviando: ${this.myGroup.value}`)
    //Tag da moeda original.
    let tagA = this.myGroup.value.code1;
    //Tag da moeda para conversão.
    let tagB = this.myGroup.value.code2;
    //valor da conversão.
    this.valor = Number(this.myGroup.value.valor);

    //Enviando requisição para service.
    this.moedaService.converterMoedas(tagA,tagB).subscribe((response)=>{
      //data da conversão
      this.data = (response.date)

      // valor para conversão
      this.conversor = Object.values(response.info)

      this.resultado = this.valor * Number(this.conversor);
      console.log("quantidade da moeda"+(this.valor));

      //valor da conversão
      console.log(`Você recebeu: ${this.conversor}`);

    });



  }

}
