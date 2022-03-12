import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstadosFinancierosComponent } from './estados-financieros/estados-financieros.component';
import { GastosComponent } from './gastos/gastos.component';
import { PagosComponent } from './pagos/pagos.component';

const routes: Routes = [
  {path:'',
  children:[
    {path:'pagos',component:PagosComponent},
    {path:'gastos',component:GastosComponent},
    {path:'estados-financieros',component:EstadosFinancierosComponent}

  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionFinancieraRoutingModule { }
