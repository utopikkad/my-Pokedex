import { Component, OnInit } from '@angular/core';
import { Pokemon } from "./pokemon.model";
import { PokemonService } from "./pokemon-service";

@Component({
  selector: 'all-list',  //'app-pokemon-list-component'
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['pokemon-list.component.css'],
})
export class PokemonListComponent implements OnInit {
  pokemon: Pokemon[];

  constructor(private pokemonService : PokemonService) { }

  ngOnInit():  void{
    console.log("hello")
    this.pokemonService.list()
      .then((pokemon: Pokemon[]) =>{
        console.log("hello01")

        this.pokemon = pokemon;
        console.log(pokemon)

      });
  }

}
