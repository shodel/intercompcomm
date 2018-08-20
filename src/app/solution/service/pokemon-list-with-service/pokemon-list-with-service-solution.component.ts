import {Component, OnInit} from '@angular/core';

import {PokemonSelectionSolutionService} from "../pokemon-selection-solution.service";
import {PokemonCreatorService} from "../../../pokemon-creator.service";
import {Pokemon} from "../../../model/pokemon";

@Component({
  selector: 'app-pokemon-list-with-service-solution',
  templateUrl: './pokemon-list-with-service-solution.component.html',
  styleUrls: ['./pokemon-list-with-service-solution.component.css']
})
export class PokemonListWithServiceSolutionComponent implements OnInit {

  private monstas: Pokemon[] = [];

  constructor(private pokemonCreatorService: PokemonCreatorService, private pokemonSelectionService: PokemonSelectionSolutionService) {
  }

  ngOnInit() {
    this.monstas = this.pokemonCreatorService.createPokemons();
  }

  selectPokemon(pokemon: Pokemon): void {
    this.pokemonSelectionService.selectPokemon(pokemon);
  }
}
