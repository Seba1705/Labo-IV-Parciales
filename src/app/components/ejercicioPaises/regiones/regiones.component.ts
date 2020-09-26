import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pais } from 'src/app/class/entidades.class';

@Component({
    selector: 'app-regiones',
    templateUrl: './regiones.component.html',
    styleUrls: ['./regiones.component.css']
})
export class RegionesComponent implements OnInit {

    @Input() region: string;
    @Input() pais: Pais;
    @Output() regionSeleccionada: EventEmitter<string> = new EventEmitter();

    constructor() { }

    ngOnInit(): void {
       
    }

    seleccionarRegion(region: string) {
        this.regionSeleccionada.emit(region);
    }

}