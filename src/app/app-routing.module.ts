import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/' },
  { path: 'gestion-servicio', loadChildren: () => import('./gestion-servicio/gestion-servicio.module').then(m => m.GestionServicioModule) },
  { path: 'gestion-financiera', loadChildren: () => import('./gestion-financiera/gestion-financiera.module').then(m => m.GestionFinancieraModule) },
  { path: 'fabricacion', loadChildren: () => import('./fabricacion/fabricacion.module').then(m => m.FabricacionModule) },
  { path: 'recursos-humanos', loadChildren: () => import('./recursos-humanos/recursos-humanos.module').then(m => m.RecursosHumanosModule) },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
