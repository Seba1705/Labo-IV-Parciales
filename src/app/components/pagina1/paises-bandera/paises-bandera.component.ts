import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pais } from 'src/app/class/entidades.class';

@Component({
    selector: 'app-paises-bandera',
    templateUrl: './paises-bandera.component.html',
    styleUrls: ['./paises-bandera.component.css']
})
export class PaisesBanderaComponent implements OnInit {

    @Input() paises: Pais[] = [];
    @Output() paisSeleccionado: EventEmitter<Pais> = new EventEmitter();

    constructor() { }

    ngOnInit(): void {
    }

    verDetallePais(pais: Pais) {
        this.paisSeleccionado.emit(pais);
    }
}
