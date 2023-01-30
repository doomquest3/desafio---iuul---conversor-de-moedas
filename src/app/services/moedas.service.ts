import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { listaMoedas } from '../models/listaMoedas.model';

@Injectable({
  providedIn: 'root'
})
export class MoedasService {

  private apiUrl = 'https://api.exchangerate.host/symbols';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type' : 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  //método para requisitar moedas para listar as moedas
  public listarMoedas():Observable<listaMoedas>{
    return this.http.get<listaMoedas>(this.apiUrl)


  }

}
