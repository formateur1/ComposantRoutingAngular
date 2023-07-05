import { Injectable } from '@angular/core';
import { Client } from '../model/client.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {

  listeClient:Client[] = [];

  constructor(private http:HttpClient) { }

  getListeClient():Observable<Client[]>
  {
    // var c1:Client = new Client(1, "Dupont", "Jean", new Date());
    // var c2:Client = new Client(2, "Durant", "Louis", new Date());
    // var c3:Client = new Client(3, "Paix", "Marie", new Date());    
    // this.listeClient = [c1, c2, c3];
    // return this.listeClient;

    return this.http.get<Client[]>("http://localhost:8080/listeClient");
  }

  ajouterClient(client:Client):Observable<Client>
  {
    return this.http.post<Client>("http://localhost:8080/saveClient", client);
  }

  deleteClient(id:number):Observable<boolean>
  {
    return this.http.delete<boolean>("http://localhost:8080/deleteClient/" + id);
  }

  getClientById(id:number):Observable<Client>
  {
    return this.http.get<Client>("http://localhost:8080/getClient/" + id);
  }

  updateClient(client:Client):Observable<boolean>
  {
    return this.http.put<boolean>("http://localhost:8080/modifierClient", client);
  }

  // getAllCoinsListing() {
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'X-CMC_PRO_API_KEY':  '1b305f9a-fb09-4338-8d7e-277d20a74667'
  //     })
  //   };
  //   return this.http.get("https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest", httpOptions);
  //   }
}
