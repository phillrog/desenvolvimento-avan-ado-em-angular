import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './navegacao/home/home.component';
import { AcessoNegadoComponent } from './navegacao/acesso-negado/acesso-negado.component';
import { NotFoundComponent } from './navegacao/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'conta',
    loadChildren: () => import('./conta/conta.module')
      .then(m => m.ContaModule)
  },
  {
    path: 'fornecedores',
    loadChildren: () => import('./fornecedor/fornecedor.module')
      .then(m => m.FornecedorModule)
  },
  {
    path: 'produtos',
    loadChildren: () => import('./produto/produto.module')
      .then(m => m.ProdutoModule)
  },
  { path: 'acesso-negado', component: AcessoNegadoComponent },
  { path: 'nao-encontrado', component: NotFoundComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
