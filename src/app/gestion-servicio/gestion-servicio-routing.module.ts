import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasComponent } from './categorias/categorias.component';
import { TicketsPendientesComponent } from './tickets-pendientes/tickets-pendientes.component';
import { TicketsResueltosComponent } from './tickets-resueltos/tickets-resueltos.component';

const routes: Routes = [
  {path:'',
  children:[
    {path:'categorias',component:CategoriasComponent},
    {path:'tickets-pendientes',component:TicketsPendientesComponent},
    {path:'tickets-resueltos',component:TicketsResueltosComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionServicioRoutingModule { }
