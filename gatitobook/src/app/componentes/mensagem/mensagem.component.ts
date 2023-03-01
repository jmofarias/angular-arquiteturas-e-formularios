import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.css']
})
export class MensagemComponent implements OnInit {

  // com esse decorator essa variável fica disponível em <app-mensangem mensagem="Usuário Obrigatório"> </app-mensangem>
  @Input()
  mensagem = '';

  constructor() { }

  ngOnInit(): void {
  }

}
