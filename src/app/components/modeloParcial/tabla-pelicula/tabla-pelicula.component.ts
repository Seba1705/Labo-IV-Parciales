
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pelicula } from 'src/app/class/entidades.class';

@Component({
    selector: 'app-tabla-pelicula',
    templateUrl: './tabla-pelicula.component.html',
    styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent implements OnInit {

    @Input() peliculas: Pelicula[];
    @Output() peliculaSeleccionada: EventEmitter <Pelicula> = new EventEmitter();

    constructor() { }

    ngOnInit(): void {
    }

    verDetallePelicula(pelicula: Pelicula) {
        this.peliculaSeleccionada.emit(pelicula);
        console.log(pelicula);
    }
}
