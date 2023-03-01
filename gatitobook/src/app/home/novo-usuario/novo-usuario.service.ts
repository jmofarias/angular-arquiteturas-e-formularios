import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NovoUsuario } from './novo-usuario';

@Injectable({
  providedIn: 'root'
})
export class NovoUsuarioService {

  // criando método de interação com o backend usando o HttpClient
  constructor(private http: HttpClient) { }

  cadastraNovoUsuario(novoUsuario: NovoUsuario) {
    // esse método vai enviar para o backend o novoUsuario 
    return this.http.post('http://localhost:3000/user/signup', novoUsuario);
  }

  // validação assíncrona: fazer uma requisição ao nosso back-end para saber se o usuário já está criado na nossa base de dados
  verificaUsuarioExistente(nomeUsuario: string){
    // fazendo um get no back-end
    return this.http.get(`http://localhost:3000/user/exists/${nomeUsuario}`);
  }
}