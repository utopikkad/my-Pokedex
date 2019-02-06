import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokemonListComponent } from './pokemon-list-component/pokemon-list.component';
import { PokemonDetailComponent } from "./pokemon-list-component/pokemon-detail.component";

const routes: Routes = [
   {path: "", component: PokemonListComponent},
   { path: "details/:id", component: PokemonDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
