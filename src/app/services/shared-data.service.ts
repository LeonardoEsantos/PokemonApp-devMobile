import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private pokemon: any;

  constructor() { }

  setPokemon(data: any) {
    this.pokemon = data;
  }

  getPokemon() {
    return this.pokemon;
  }
}
