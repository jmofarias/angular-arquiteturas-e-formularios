import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent, LoginComponent],
  // FormsModule: importando o modulo padrao do Angular de formularios templates
  imports: [CommonModule, HomeRoutingModule, FormsModule],
  // exportando o módulo HomeComponent
  exports: [HomeComponent],
})
export class HomeModule {}
