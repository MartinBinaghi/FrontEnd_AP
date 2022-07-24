export class Experiencia {
    id? : number;
    subtituloE: string;
    nombreE : string;
    descripcionE : string;
    experiencia__open : boolean;

    constructor(experiencia__open: boolean, subtituloE: string, nombreE: string, descripcionE: string) {
        this.experiencia__open = experiencia__open;
        this.nombreE = nombreE;
        this.subtituloE = subtituloE;
        this.descripcionE = descripcionE;
    }
}
