export class Entidad {
    id: string;
}

export class Pais {
    name: string;
    alpha3Code: string;
    flag: string;
}

export class Persona {
    id: number;
    age: number;
    first_name: string;
    email: string;
    photo: string;
}

export class Pelicula {
    id: number;
    nombre: string;
    tipo: string;
    fecfecha_de_estreno: string;
    cantidad_de_publico: number;
    foto: string;
}
