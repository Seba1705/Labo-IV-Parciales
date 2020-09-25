import { Component, Input, OnInit } from '@angular/core';
import { Pais } from 'src/app/class/entidades.class';

@Component({
    selector: 'app-detalle',
    templateUrl: './detalle.component.html',
    styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

    @Input() pais: Pais;

    constructor() { }

    ngOnInit(): void {
    }

}
