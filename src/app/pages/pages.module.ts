import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';

import { Pagina2Component } from './pagina2/pagina2.component';
import { Pagina1Component } from './pagina1/pagina1.component';


@NgModule({
    declarations: [
        Pagina1Component,
        Pagina2Component
    ],
    imports: [
        CommonModule,
        ComponentsModule
    ],
    exports: [
        Pagina1Component,
        Pagina2Component
    ]
})
export class PagesModule { }
