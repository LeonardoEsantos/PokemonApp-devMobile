import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private pokemon: any;
  private pokemons: any[] = [];

  constructor() { }

  setPokemon(data: any) {
    this.pokemon = data;
  }

  getPokemon() {
    return this.pokemon;
  }

  addPokemon(pokemon: any) {
    this.pokemons.push(pokemon);
  }

  getPokemons() {
    return this.pokemons;
  }
}
