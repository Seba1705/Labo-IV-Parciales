import { Component, Input, OnInit } from '@angular/core';
import { Persona } from 'src/app/class/entidades.class';

@Component({
    selector: 'app-tabla',
    templateUrl: './tabla.component.html',
    styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

    @Input() personas: Persona[];
    
    constructor() { }

    ngOnInit(): void {
    }

}
