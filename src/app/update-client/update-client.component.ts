import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientServiceService } from '../service/client-service.service';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements OnInit {

  clientForm?:FormGroup;
  id!:number;

  constructor(private formBuilder:FormBuilder, private ar:ActivatedRoute, private cs:ClientServiceService, private route:Router) {
    this.id = ar.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.cs.getClientById(this.id).subscribe(client => {
    this.clientForm = this.formBuilder.group({
        id: [client.id, [Validators.required]],
        nom: [client.nom, [Validators.minLength(3), Validators.maxLength(20)]],
        prenom: [client.prenom]
      })
  });
  }

  updateClient()
  {
    this.cs.updateClient(this.clientForm?.value).subscribe();
    this.route.navigateByUrl("infos");
  }



}
