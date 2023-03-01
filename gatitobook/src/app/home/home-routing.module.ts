import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component';

// quando o usuário acessar a rota home ele é direcionado somente para essa rota desse módulo
// o Angular separa essa rota e faz o carregamento do módulo apenas quando ela for acessada (lazy load, carregamento sob demanda)
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    // children é um elemento de subrota (array de rotas)
    children: [
      {
        // aqui ele diz que no router-outlet interno que está dentro do nosso component home, quando for uma rota vazia ele vai projetar o login.component
        path: '',
        component: LoginComponent,
      },
      {
        path: 'novousuario',
        component: NovoUsuarioComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
