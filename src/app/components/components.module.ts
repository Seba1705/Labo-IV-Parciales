import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { NavbarComponent } from './navbar/navbar.component';
import { PaisesBanderaComponent } from './ejercicioPaises/paises-bandera/paises-bandera.component';
import { RegionesComponent } from './ejercicioPaises/regiones/regiones.component';
import { PrincipalComponent } from './ejercicioPaises/principal/principal.component';
import { DetalleComponent } from './ejercicioPaises/detalle/detalle.component';
import { BorrarComponent } from './ejercicioListado/borrar/borrar.component';
import { ModificacionComponent } from './ejercicioListado/modificacion/modificacion.component';
import { PrincipalListadoComponent } from './ejercicioListado/principal/principal.component';
import { ListadoComponent } from './ejercicioListado/listado/listado.component';
import { DetalleListadoComponent } from './ejercicioListado/detalle/detalle.component';
import { TablaComponent } from './ejercicioListado/tabla/tabla.component';
import { ListaComponent } from './ejercicioListado/lista/lista.component';

@NgModule({
    declarations: [
        NavbarComponent,
        PaisesBanderaComponent,
        RegionesComponent,
        PrincipalComponent,
        DetalleComponent,
        BorrarComponent,
        ModificacionComponent,
        PrincipalListadoComponent,
        ListadoComponent,
        DetalleListadoComponent,
        TablaComponent,
        ListaComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule
    ],
    exports: [
        NavbarComponent,
        PaisesBanderaComponent,
        RegionesComponent,
        PrincipalComponent,
        DetalleComponent,
        BorrarComponent,
        ModificacionComponent,
        PrincipalListadoComponent,
        DetalleListadoComponent,
        TablaComponent,
        ListadoComponent
    ]
})
export class ComponentsModule { }
