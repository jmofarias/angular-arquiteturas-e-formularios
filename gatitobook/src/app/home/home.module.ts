import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
// usando o formulário reativo do angular
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MensagemModule } from '../componentes/mensagem/mensagem.module';
import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component';

@NgModule({
  declarations: [HomeComponent, LoginComponent, NovoUsuarioComponent],
  // FormsModule: importando o modulo padrao do Angular de formularios templates
  imports: [CommonModule, HomeRoutingModule, FormsModule, MensagemModule, ReactiveFormsModule],
  // exportando o módulo HomeComponent
  exports: [HomeComponent],
})
export class HomeModule {}
