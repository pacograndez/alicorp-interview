import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CrudsComponent} from "./cruds.component";
import {PokemonComponent} from "./pokemon/pokemon.component";

const routes: Routes = [
  {
    path: '',
    component: CrudsComponent,
    children: [
      {path: 'pokemon', component: PokemonComponent},
      {path: '', redirectTo: 'pokemon', pathMatch: 'full'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudsRoutingModule { }
