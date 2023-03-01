import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { NovoUsuarioService } from './novo-usuario.service';
import { first, map, switchMap } from 'rxjs/operators'
import { of } from 'rxjs';

// fazendo a validação se o usuário já existe nesse serviço específico

@Injectable({
  providedIn: 'root'
})

export class UsuarioExisteService {
  // injetando o serviço de novoUsuarioService
  constructor(private novoUsuarioService: NovoUsuarioService) { }

  // essa função vai retornar um observable que representa o valor, porque estamos fazendo uma validação assíncrona
  usuarioJaExiste(){
    // control: é o input do tipo AbstractControl
    // o Angular consegue rastrear a digitação do usuário num formulário através de um observable
    // estamos trabalhando com 2 observables, um que representa a digitação do usuário e outro que representa a requisição no servidor, nesse caso vamos converter a digitação numa requisição
    return (control: AbstractControl) => {

      if(control && control.valueChanges) {
        // pipe: método do RXJS que pega um observable de entrada e retorna outro observable
        return control.valueChanges.pipe(
          // switchMap: vai fazer a troca do fluxo da digitação pelo fluxo da requisição
          // o switchMap recebe o nome de usuário que o usuário está digitando e converte na requisição do back-end
          switchMap((nomeUsuario) => this.novoUsuarioService.verificaUsuarioExistente(nomeUsuario)),
          // o map recebe uma função que recebe o resultado da requisição http que vai ser true ou false, e vai verificar se ele existe, se sim retorno o objeto de erro, caso não retorno nulo
          map((usuarioExiste) => usuarioExiste ? {usuarioExistente: true} : null),
          // depois da requisição ele vai fechar o observable
          first()
        );
      } else {
        return of(null);
      }
    };
  }
}
