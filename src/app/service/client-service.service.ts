import { Injectable } from '@angular/core';
import { Client } from '../model/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {

  listeClient:Client[] = [];

  constructor() { }

  getListeClient():Client[]
  {
    var c1:Client = new Client(1, "Dupont", "Jean");
    var c2:Client = new Client(2, "Durant", "Louis");
    var c3:Client = new Client(3, "Paix", "Marie");
    
    this.listeClient = [c1, c2, c3];

    return this.listeClient;
  }
}
