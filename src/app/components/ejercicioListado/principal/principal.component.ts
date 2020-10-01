import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/class/entidades.class';
import { EntidadesService } from 'src/app/services/entidades.service';

@Component({
    selector: 'app-principal-listado',
    templateUrl: './principal.component.html',
    styleUrls: ['./principal.component.css']
})
export class PrincipalListadoComponent implements OnInit {

    flag = 'lista';
    url: string = 'https://api.mocki.io/v1/ca9f41c6';
    personas: Persona[] = [];
    

    constructor(private entidadesService: EntidadesService) { }

    ngOnInit(): void {
        this.getEntidades(this.url);
    }

    getEntidades(path: string) {
        this.entidadesService.peticionHttp(path).subscribe((resp: Persona[]) => {
            this.personas = resp;
        });
    }

    cambiarVista() {
        if(this.flag === 'lista')
            this.flag = 'tabla';
        else
            this.flag = 'lista';
    }
}
