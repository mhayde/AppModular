import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FabricacionRoutingModule } from './fabricacion-routing.module';
import { MateriaPrimaComponent } from './materia-prima/materia-prima.component';
import { ProduccionComponent } from './produccion/produccion.component';
import { DesperdiciosComponent } from './desperdicios/desperdicios.component';


@NgModule({
  declarations: [
    MateriaPrimaComponent,
    ProduccionComponent,
    DesperdiciosComponent
  ],
  imports: [
    CommonModule,
    FabricacionRoutingModule
  ]
})
export class FabricacionModule { }
