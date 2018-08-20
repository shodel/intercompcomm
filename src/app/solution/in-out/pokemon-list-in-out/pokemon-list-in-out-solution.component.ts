import {Component, OnInit} from '@angular/core';
import {Pokemon} from "../../../model/pokemon";
import {PokemonCreatorService} from "../../../pokemon-creator.service";

@Component({
  selector: 'app-pokemon-list-solution',
  templateUrl: './pokemon-list-in-out-solution.component.html',
  styleUrls: ['./pokemon-list-in-out-solution.component.css']
})
export class PokemonListInOutSolutionComponent implements OnInit {

  private monstas: Pokemon[] = [];
  private selectedPokemon: Pokemon;
  detailClickedDate: Date;

  constructor(private pokemonCreatorService: PokemonCreatorService) {
  }

  ngOnInit() {
    this.monstas = this.pokemonCreatorService.createPokemons();
  }

  selectPokemon(pokemon: Pokemon): void {
    this.selectedPokemon = pokemon;
  }

  saveClickedDate(event) {
    this.detailClickedDate = event;
  }
}
