import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = '';
  senha = '';

  constructor(private authService: AutenticacaoService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    // consumindo o servico no metodo login
    // metodo subscribe() como se fosse o .then da promisse
    this.authService.autenticar(this.usuario, this.senha).subscribe(() => {
      // direcionando para a rota de listagem de animais
      this.router.navigate(['animais']);
    },(error) => {
      alert("Usuário ou senha inválido");
      console.log(error);
      
    }
    );
  }
}
