import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { ContaAppComponent } from './conta.app.component';

import { ContaRoutingModule } from './cont.route';

import { CustomFormsModule } from 'ngx-custom-validators'
import { ContaService } from './services/conta.service';

@NgModule({
  declarations: [
    CadastroComponent, 
    LoginComponent,
    ContaAppComponent
  ],
  imports: [
    CommonModule,
    ContaRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CustomFormsModule
  ],
  providers: [
    ContaService
  ]
})
export class ContaModule { }
