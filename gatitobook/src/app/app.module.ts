import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HomeModule } from './home/home.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  // importanto o HomeModule que vai expor o HomeComponent
  // a importação do HomeModule foi retirada em imports porque nos iremos importar os módulos pela rota (lazy load)
  // importacao do HttpClienteModule vai ajudar na conexao com o servico de autenticacao 
  imports: [BrowserModule, AppRoutingModule, HttpClientModule], 
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
