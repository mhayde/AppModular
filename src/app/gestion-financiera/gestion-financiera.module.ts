import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionFinancieraRoutingModule } from './gestion-financiera-routing.module';
import { PagosComponent } from './pagos/pagos.component';
import { GastosComponent } from './gastos/gastos.component';
import { EstadosFinancierosComponent } from './estados-financieros/estados-financieros.component';


@NgModule({
  declarations: [
    PagosComponent,
    GastosComponent,
    EstadosFinancierosComponent
  ],
  imports: [
    CommonModule,
    GestionFinancieraRoutingModule
  ]
})
export class GestionFinancieraModule { }
