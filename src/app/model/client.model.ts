export class Client {

    id:number;
    nom:string;
    prenom:string;
    dateAbonnement:Date;

    constructor(id:number, nom:string, prenom:string, dateAbonnement:Date)
    {
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.dateAbonnement = dateAbonnement;
    }
}
