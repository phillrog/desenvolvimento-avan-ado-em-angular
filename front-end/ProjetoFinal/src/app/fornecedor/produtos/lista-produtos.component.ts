import { Component, Input } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Produto } from './../../produto/models/produto';


@Component({
  selector: 'lista-produto',
  templateUrl: './lista-produtos.component.html'
})
export class ListaProdutosComponent {

  imagens: string = environment.imagensUrl;

  @Input()
  produtos: Produto[];
}