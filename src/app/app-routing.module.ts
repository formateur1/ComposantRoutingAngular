import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfosComponent } from './infos/infos.component';
import { RechercheComponent } from './recherche/recherche.component';
import { NewsComponent } from './news/news.component';
import { FormulaireClientComponent } from './formulaire-client/formulaire-client.component';
import { UpdateClientComponent } from './update-client/update-client.component';

const routes: Routes = [
  {
    path : "infos", component: InfosComponent, 
    children : [
      {path: "recherche", component: RechercheComponent}
    ]
  },
  {path : "news", component: NewsComponent},
  {path : "formClient", component: FormulaireClientComponent},
  {path : "updateClient/:id", component: UpdateClientComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
