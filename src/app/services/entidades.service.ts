import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class EntidadesService {

    constructor(private http: HttpClient) { }

    peticionHttp(path: string) {
        return this.http.get(path);
    }
}
