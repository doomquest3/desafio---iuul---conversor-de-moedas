import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { TestBed } from '@angular/core/testing';


import { MoedasService } from './moedas.service';

describe('MoedasService', () => {
  let service: MoedasService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule,
      ],

    });
    service = TestBed.inject(MoedasService);
    http = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('ele deve chamar um get com o endpoint correto.', ()=>{
    const spy = spyOn(http, 'get').and.callThrough();
    service.listarMoedas();
    expect(spy).toHaveBeenCalledWith('https://api.exchangerate.host/symbols');

  });

  it('ele deve converter de uma moeda a outra e receber os dados da url corretamente', ()=>{
    const spy = spyOn(http, 'get').and.callThrough();
    service.converterMoedas('USD','BRL');
    expect(spy).toHaveBeenCalledWith(`https://api.exchangerate.host/convert?from=USD&to=BRL`);

  });

  it('verificar se converte os valores pela url', ()=>{
    const spy = spyOn(http, 'get').and.callThrough();
    service.verificaValor('BRL');
    expect(spy).toHaveBeenCalledWith(`https://api.exchangerate.host/convert?from=BRL&to=USD`);

  });

});
