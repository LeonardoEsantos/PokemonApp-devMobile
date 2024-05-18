import { Component } from '@angular/core';
import { SharedDataService } from '../services/shared-data.service';
import { PokeAPIService } from '../services/poke-api.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  pokemon: any;

  pokemon2: any = {
    name: '',
    front_default: '',
    abilities: '',
    height: '',
    weight: ''
  }

  winner: string = '';

  constructor(private sharedDataService: SharedDataService, private pokeAPIService: PokeAPIService) {
    // Recupera o Pokémon gerado do serviço SharedDataService
    this.pokemon = this.sharedDataService.getPokemon();
  }

  buscarPokemon2() {
    this.pokeAPIService.getPokeAPIService()
      .subscribe((value) => {
        this.pokemon2.name          = JSON.parse(JSON.stringify(value))['name'];
        this.pokemon2.front_default = JSON.parse(JSON.stringify(value))['sprites']['other']['dream_world']['front_default'];
        this.pokemon2.abilities     = JSON.parse(JSON.stringify(value))['abilities'].length;
        this.pokemon2.height        = JSON.parse(JSON.stringify(value))['height'];
        this.pokemon2.weight        = JSON.parse(JSON.stringify(value))['weight'];
      });



  }

  compararHabilidades() {
    if (this.pokemon.abilities > this.pokemon2.abilities) {
      this.winner = this.pokemon.name;
    } else if (this.pokemon.abilities < this.pokemon2.abilities) {
      this.winner = this.pokemon2.name;
    } else {
      this.winner = 'Empate';
    }
  }
}