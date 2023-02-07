import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// nesse array de rotas adiciono o elemento path que quando o usuário acessar sem nenhuma subrota definida ele vai acessar a página de home
// pathMath: vai informar para o Angular tirar os espaços na url
// redirectTo: ao acessar sem nenhum atributo ele será redirecionado para a rota home
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  // configurando a home
  // no loadChildren mando uma função que vai requisitar um módulo somente quando o usuário acessar a rota
  // promisses: .then vai receber um módulo
  // assim que o usuário acessar a home, ele vai carregar essa rota
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
