import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { converter } from '../models/converter.model';
import { listaMoedas } from '../models/listaMoedas.model';

@Injectable({
  providedIn: 'root'
})
export class MoedasService {

  //Rota para lista de moedas
  private apiUrl = 'https://api.exchangerate.host/symbols';
  //Rota para conversão das moedas.
  private apiUrlConvert = 'https://api.exchangerate.host/convert?'

  constructor(private http: HttpClient,
              private router: Router
    ) { }

  //método para requisitar moedas para listar as moedas
  public listarMoedas(): Observable<any>{
    return this.http.get<listaMoedas>(this.apiUrl);

  }

  //Método para conversão de moedas
  public converterMoedas(tagA: string, tagB: string): Observable<any>{
      console.log(`Foi recebido as tags ${tagA} e ${tagB}`);
      return this.http.get<converter>(this.apiUrlConvert+`from=${tagA}&to=${tagB}`);

  }

}
