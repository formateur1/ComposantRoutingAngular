import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, map } from 'rxjs';
import { Client } from '../model/client.model';
import { ClientServiceService } from '../service/client-service.service';

@Component({
  selector: 'app-formulaire-client',
  templateUrl: './formulaire-client.component.html',
  styleUrls: ['./formulaire-client.component.css']
})
export class FormulaireClientComponent implements OnInit {

  clientForm!:FormGroup;
  clientObs$!:Observable<Client>;

  constructor(private formBuilder:FormBuilder, private cs:ClientServiceService) {}

  ngOnInit(): void {
    this.clientForm = this.formBuilder.group(
      {
        id: [null, [Validators.required]],
        nom: [null, [Validators.minLength(3), Validators.maxLength(20)]],
        prenom: [null]
      }
    );
    
    this.clientObs$ = this.clientForm.valueChanges.pipe(
      map(data => ({
        ...data,
        dateAbonnement: new Date()
      }))
    );
    
    
  }

  saveClient(client:Client)
  {
    console.log(client);

    this.cs.ajouterClient(client).subscribe();
  }

}
