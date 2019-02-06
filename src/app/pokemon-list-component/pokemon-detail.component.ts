import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Pokemon } from "./pokemon.model";
import { PokemonService } from "./pokemon-service";

@Component({
  selector: "app-details",
  templateUrl: "./pokemon-detail.component.html",
  styleUrls: ['pokemon-detail.component.css'],
})
export class PokemonDetailComponent implements OnInit {
  pokemon = new Pokemon();

  constructor(private pokemonService: PokemonService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.params["id"];

    this.pokemonService.get(id)
      .then((pokemon) => { this.pokemon = pokemon; });
  }
}