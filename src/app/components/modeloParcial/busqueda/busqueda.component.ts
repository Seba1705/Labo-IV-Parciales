
import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/class/entidades.class';
import { EntidadesService } from 'src/app/services/entidades.service';

@Component({
    selector: 'app-busqueda',
    templateUrl: './busqueda.component.html',
    styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

    flag = 'lista';
    url: string = 'https://run.mocky.io/v3/f0f661ce-537f-4c9a-94b1-7c34a7ce95ca';
    peliculas: Pelicula[] = [];
    pelicula: Pelicula;


    constructor(private entidadesService: EntidadesService) { }

    ngOnInit(): void {
        this.getEntidades(this.url);
    }

    getEntidades(path: string) {
        this.entidadesService.peticionHttp(path).subscribe((resp: Pelicula[]) => {
            this.peliculas = resp;
        });
    }

    cambiarVista() {
        if (this.flag === 'lista')
            this.flag = 'tabla';
        else
            this.flag = 'lista';
    }

    tomarPeliculaParaDetalle(pelicula: Pelicula) {
        this.pelicula = pelicula;
    }
}
