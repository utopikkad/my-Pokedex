import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";

//import "rxjs/add/operator/toPromise";

import { Observable } from 'rxjs';
import { throwError } from 'rxjs';              //Bonnes declarations pour Angular 5 et au dessus ?
import { catchError } from 'rxjs/operators';


import { Pokemon } from "./pokemon.model";

@Injectable()
export class PokemonService {
  constructor(private http: Http) { }

  list() {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");   //Access-Control-Allow-Origin=true ?

    return this.http.get("http://pokeapi.salestock.net/api/v2/pokedex/2/", {
      headers: headers
    })
    .toPromise()
    .then((res: Response) => {
      let data = res.json();
      let allPokemon = [];

      data.pokemon_entries.forEach((entry) => {
        let pokemon = new Pokemon();
        pokemon.name = entry.pokemon_species.name;
        pokemon.id = entry.entry_number;
        allPokemon.push(pokemon);
      });

      return allPokemon;
    })
    .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || "";
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ""} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Promise.reject(errMsg);
  }
  

get(id: number) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");     //Access-Control-Allow-Origin=Allow
  
    return this.http.get("http://pokeapi.salestock.net/api/v2/pokemon/" + id + "/", {
      headers: headers
    })
    .toPromise()
    .then((res: Response) => {
      let data = res.json();
      let pokemon = new Pokemon();
      pokemon.name = data.name;
      pokemon.id = data.id;
  
      data.types.forEach((eachType) => {
        pokemon.types.push(eachType.type.name);
      });
  
      data.stats.forEach((eachStat) => {
        pokemon.stats.push({
          name: eachStat.stat.name,
          value: eachStat.base_stat
        });
      });
      
      return pokemon;
    })
    .catch(this.handleError);
  }  
}