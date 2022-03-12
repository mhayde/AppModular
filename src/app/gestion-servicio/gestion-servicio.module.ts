import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionServicioRoutingModule } from './gestion-servicio-routing.module';
import { CategoriasComponent } from './categorias/categorias.component';
import { TicketsPendientesComponent } from './tickets-pendientes/tickets-pendientes.component';
import { TicketsResueltosComponent } from './tickets-resueltos/tickets-resueltos.component';


@NgModule({
  declarations: [
    CategoriasComponent,
    TicketsPendientesComponent,
    TicketsResueltosComponent
  ],
  imports: [
    CommonModule,
    GestionServicioRoutingModule
  ]
})
export class GestionServicioModule { }
