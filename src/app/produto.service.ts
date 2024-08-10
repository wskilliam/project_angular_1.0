import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  //aqui dentro do constructor () ejetar http dbgames.json, antes tem que import dentro de app.modules.ts 
  constructor(private httpClient: HttpClient) { }

  //adicionar aqui dentro metodos.
  getProdutos(): Observable<any>{
    return this.httpClient.get("http://localhost:3000/produtos")
  }
//final
}
