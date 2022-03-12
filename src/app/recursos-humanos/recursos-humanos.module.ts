import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecursosHumanosRoutingModule } from './recursos-humanos-routing.module';
import { ContratacionesComponent } from './contrataciones/contrataciones.component';
import { SalariosComponent } from './salarios/salarios.component';
import { EmpleadosComponent } from './empleados/empleados.component';


@NgModule({
  declarations: [
    ContratacionesComponent,
    SalariosComponent,
    EmpleadosComponent
  ],
  imports: [
    CommonModule,
    RecursosHumanosRoutingModule
  ]
})
export class RecursosHumanosModule { }
