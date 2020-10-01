
import { Component, OnInit } from '@angular/core';
import { Actor, Pelicula } from 'src/app/class/entidades.class';
import { EntidadesService } from 'src/app/services/entidades.service';

@Component({
    selector: 'app-busqueda',
    templateUrl: './busqueda.component.html',
    styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

    flag = 'lista';
    urlPeliculas: string = 'https://run.mocky.io/v3/f0f661ce-537f-4c9a-94b1-7c34a7ce95ca';
    urlActores = 'https://run.mocky.io/v3/8b43164c-4af9-42d9-8187-72d592d3f392';
    peliculas: Pelicula[] = [];
    pelicula: Pelicula;
    actor: Actor;
    actores: Actor[] = [];


    constructor(private entidadesService: EntidadesService) { }

    ngOnInit(): void {
        this.getPeliculas(this.urlPeliculas);
    }

    getPeliculas(path: string) {
        this.entidadesService.peticionHttp(path).subscribe((resp: Pelicula[]) => {
            this.peliculas = resp;
        });
    }

    getActores(path: string) {
        this.entidadesService.peticionHttp(path).subscribe((resp: Actor[]) => {
            this.actores = resp;
        });
    }

    cambiarVista() {
       this.pelicula = null;
    }

    tomarPeliculaParaDetalle(pelicula: Pelicula) {
        this.pelicula = pelicula;
    }
}
