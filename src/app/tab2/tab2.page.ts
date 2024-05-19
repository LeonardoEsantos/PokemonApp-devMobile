import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../services/shared-data.service';
import { PokeAPIService } from '../services/poke-api.service';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  pokemon: any = {
    name: '',
    front_default: '',
    abilities: 0,
    height: '',
    weight: ''
  };
  pokemon2: any = {
    name: '',
    front_default: '',
    abilities: 0,
    height: '',
    weight: ''
  };
  comparisonResult: { color: string, text: string } = { color: '', text: '' };

  constructor(
    private sharedDataService: SharedDataService,
    private pokeAPIService: PokeAPIService,
    private photoService: PhotoService
  ) {  }

  ionViewWillEnter() {
    this.pokemon = this.sharedDataService.getPokemon();
    this.buscarPokemon2();
  }

  buscarPokemon2() {
    this.pokeAPIService.getPokeAPIService()
      .subscribe((value) => {
        this.pokemon2.name          = JSON.parse(JSON.stringify(value))['name'];
        this.pokemon2.front_default = JSON.parse(JSON.stringify(value))['sprites']['other']['dream_world']['front_default'];
        this.pokemon2.abilities     = JSON.parse(JSON.stringify(value))['abilities'].length;
        this.pokemon2.height        = JSON.parse(JSON.stringify(value))['height'];
        this.pokemon2.weight        = JSON.parse(JSON.stringify(value))['weight'];
        this.compareAbilities();
      });
  }

  compareAbilities() {
    if (this.pokemon2.abilities === this.pokemon.abilities) {
      this.comparisonResult = { color: 'yellow', text: 'Empatou' };
    } else if (this.pokemon2.abilities > this.pokemon.abilities) {
      this.comparisonResult = { color: 'green', text: 'Venceu' };
    } else {
      this.comparisonResult = { color: 'red', text: 'Perdeu' };
    }
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }
}

