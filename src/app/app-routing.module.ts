import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfosComponent } from './infos/infos.component';
import { RechercheComponent } from './recherche/recherche.component';

const routes: Routes = [
  {
    path : "infos", component: InfosComponent, 
    children : [
      {path: "recherche", component: RechercheComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
