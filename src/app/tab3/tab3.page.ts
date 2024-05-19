import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../services/shared-data.service';
import { PokeAPIService } from '../services/poke-api.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  pokemons: any[] = [];

  constructor(
    private sharedDataService: SharedDataService,
    private pokeAPIService: PokeAPIService,
  ) { }

  ngOnInit() {
    this.pokemons = this.sharedDataService.getPokemons();
  }
}