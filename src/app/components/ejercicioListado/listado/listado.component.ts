import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-listado',
    templateUrl: './listado.component.html',
    styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

    @Output() eventoCambiarVista = new EventEmitter();

    constructor() { }

    ngOnInit(): void {
    }

    cambiarVista() {
        this.eventoCambiarVista.emit();
    }

}
