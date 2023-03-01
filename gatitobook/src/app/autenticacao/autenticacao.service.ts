// o service implementa regra de negócio, como a comunicação com o backend, comunicação com o localStorage

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// @Injectable: anotacao angular que indica para o mecanismo de gestao de dependencia do angular que essa classe pode ser injetada em outro componente ou outro servico
@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  //httpClient: é um serviço padrão do Angular para se comunicar com o backend

  constructor(private httpClient: HttpClient) {}

  // método de autenticação que vai retornar um objeto do tipo 
  // o Observable é tipo uma promisse javascript, é um objeto que quando a requisição completar ele vai retornar o objeto que foi definido dentro do observable
  // o autenticar vai chamar o httpClient fazendo o post no backend
  autenticar(usuario: string, senha: string): Observable<any>{
    // no objeto httpClient eu vou fazer uma requisição do tipo post passando o endereço da API
    return this.httpClient.post('http://localhost:3000/user/login', {
      userName:usuario,
      password: senha,
    });
  }
}
