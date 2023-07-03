import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfosComponent } from './infos/infos.component';

const routes: Routes = [
  {path : "infos", component: InfosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
