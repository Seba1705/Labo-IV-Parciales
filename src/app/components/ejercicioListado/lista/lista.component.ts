import { Component, Input, OnInit } from '@angular/core';
import { Persona } from 'src/app/class/entidades.class';

@Component({
    selector: 'app-lista',
    templateUrl: './lista.component.html',
    styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

    @Input() personas: Persona[] = []; 
    
    constructor() { }

    ngOnInit(): void {
    }

}
