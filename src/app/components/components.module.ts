import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { NavbarComponent } from './navbar/navbar.component';
import { PaisesBanderaComponent } from './pagina1/paises-bandera/paises-bandera.component';
import { RegionesComponent } from './pagina1/regiones/regiones.component';
import { PrincipalComponent } from './pagina1/principal/principal.component';
import { DetalleComponent } from './pagina1/detalle/detalle.component';



@NgModule({
    declarations: [
        NavbarComponent,
        PaisesBanderaComponent,
        RegionesComponent,
        PrincipalComponent,
        DetalleComponent
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
        DetalleComponent,
        PrincipalComponent
    ]
})
export class ComponentsModule { }
