import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { minusculoValidator } from './minusculo.validator';
import { NovoUsuario } from './novo-usuario';
import { NovoUsuarioService } from './novo-usuario.service';
import { UsuarioExisteService } from './usuario-existe.service';
import { usuarioSenhaIguaisValidator } from './usuario-senha-iguais.validator';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent implements OnInit {

  // ! para indicar que ele pode ser nulo ou não
  novoUsuarioForm!: FormGroup;

  // serviço para facilitar a criação de formulários reativos (FormBuilder)
  constructor(
    private formBuilder: FormBuilder,
    private novoUsuarioService: NovoUsuarioService,
    private usuarioExistenteService: UsuarioExisteService,
    private router:Router
    ) {}

  // ngOnInit: método de ciclo de vida do angular que é executado após a construção ser feita com sucesso da classe
  ngOnInit(): void {
    this.novoUsuarioForm = this.formBuilder.group(
      {
      // elementos que terão no nosso formulário
      // no outro array vai ser tratado as validações
      // Validators: classe utilitário do angular que tem algumas implementações já prontas
      // Validators.required: campo obrigatório
      // Validators.email: campo do tipo email
      email: ['', [Validators.required, Validators.email]],
      fullName: ['', [Validators.required, Validators.minLength(4)]],
      // injetando a validação se o usuário já existe aqui
      userName: ['', [minusculoValidator], [this.usuarioExistenteService.usuarioJaExiste()]],
      password: [''],
    },
    {
      // tratando a validação do formulário que vai comparar os campos de usuário e senha
      validators: [usuarioSenhaIguaisValidator],
    });
  }

  // método para quando o formulário for submetido
  cadastrar() {
    // se o formulário for válido
    if(this.novoUsuarioForm.valid){
      // getRawValue: retorna um objeto só com o estado
      // as NovoUsuario: casting, dizendo que o usuário que vinher vai ser um novo usuário, isso porque o nome dos elementos é igual ao do novo usuário
      // pegando o valor do novo usuário em formato json
      const novoUsuario = this.novoUsuarioForm.getRawValue() as NovoUsuario;
      // cadastrarNovoUsuario que é onde vou fazer o post
      // como isso é um observable, para eu pegar essa informação depois da requisição eu utilizo o método subscribe que recebe uma função de sucesso que caso o usuário tenha se cadastrado com sucesso ele vá para a tela inicial de login
      this.novoUsuarioService.cadastraNovoUsuario(novoUsuario).subscribe(() => {
        // rota de login
        this.router.navigate(['']);
      }, 
        //se estiver algum erro 
        (error) => {
          console.log(error);
        }
      )
    }
    
  }

}