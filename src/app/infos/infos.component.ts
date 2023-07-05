import { Component, OnInit } from '@angular/core';
import { ClientServiceService } from '../service/client-service.service';
import { Client } from '../model/client.model';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css']
})
export class InfosComponent implements OnInit {

  listeC$!:Observable<Client[]>;

  constructor(private cs:ClientServiceService, private ar:ActivatedRoute, private route:Router) {
    console.log("url : " + ar.snapshot.url)
  }

  ngOnInit(): void {
    this.listeC$ = this.cs.getListeClient();

    // this.cs.getAllCoinsListing().subscribe(data => {console.log(data)});
  }

  delete(id:number)
  {
    this.cs.deleteClient(id).subscribe();
    // this.route.navigate(["infos"])
    this.route.navigateByUrl("infos");
  }

  update(id:number)
  {
    this.route.navigateByUrl("updateClient/" + id);
  }

  
}
