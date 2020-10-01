import { Component, OnInit } from '@angular/core';
import { Pais } from 'src/app/class/entidades.class';
import { EntidadesService } from 'src/app/services/entidades.service';

@Component({
    selector: 'app-principal',
    templateUrl: './principal.component.html',
    styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

    url: string = 'https://restcountries.eu/rest/v2/region/';
    region: string = 'europe';

    pais: Pais;
    paises: Pais[];

    constructor(private entidadesService: EntidadesService) { }

    ngOnInit(): void {
        this.paises = [];
        this.getPaises(this.region);
    }

    tomarPaisParaDetalles(pais: Pais) {
        this.pais = pais;
    }

    tomarRegion(region: string) {
        this.region = region;
        this.getPaises(region);
    }

    getPaises(region: string) {
        this.entidadesService.peticionHttp(`${this.url}${region}`)
            .subscribe((resp: Pais[]) => {
                this.paises = resp;
            });
    }

}
