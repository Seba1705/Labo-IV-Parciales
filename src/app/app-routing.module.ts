import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModeloPrimerParcialComponent } from './pages/modelo-primer-parcial/modelo-primer-parcial.component';

import { Pagina1Component } from './pages/pagina1/pagina1.component';
import { Pagina2Component } from './pages/pagina2/pagina2.component';

const routes: Routes = [
    { path: 'Pagina-1', component: Pagina1Component },
    { path: 'Pagina-2', component: Pagina2Component },
    { path: 'busqueda', component: ModeloPrimerParcialComponent },
    { path: '', component: Pagina1Component },
    { path: '**', pathMatch: 'full', redirectTo: 'Pagina-1' }
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
