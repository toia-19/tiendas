import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// rutas de cada una de las páginas de "Tiendas"
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./paginas/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./paginas/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'farmacia',
    loadChildren: () => import('./paginas/farmacia/farmacia.module').then( m => m.FarmaciaPageModule)
  },
  {
    path: 'mercado',
    loadChildren: () => import('./paginas/mercado/mercado.module').then( m => m.MercadoPageModule)
  },
  {
    path: 'comida',
    loadChildren: () => import('./paginas/comida/comida.module').then( m => m.ComidaPageModule)
  },
  {
    path: 'informatica',
    loadChildren: () => import('./paginas/informatica/informatica.module').then( m => m.InformaticaPageModule)
  },
  {
    path: 'ropa',
    loadChildren: () => import('./paginas/ropa/ropa.module').then( m => m.RopaPageModule)
  },
  {
    path: 'libreria',
    loadChildren: () => import('./paginas/libreria/libreria.module').then( m => m.LibreriaPageModule)
  },
  {
    path: 'sexshop',
    loadChildren: () => import('./paginas/sexshop/sexshop.module').then( m => m.SexshopPageModule)
  },
  {
    path: 'jugueteria',
    loadChildren: () => import('./paginas/jugueteria/jugueteria.module').then( m => m.JugueteriaPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
