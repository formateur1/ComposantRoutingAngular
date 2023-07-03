import { Component, OnInit } from '@angular/core';
import { ClientServiceService } from '../service/client-service.service';
import { Client } from '../model/client.model';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css']
})
export class InfosComponent implements OnInit {

  listeC!:Client[];

  constructor(private cs:ClientServiceService) {}

  ngOnInit(): void {
    this.listeC = this.cs.getListeClient();
  }

  
}
