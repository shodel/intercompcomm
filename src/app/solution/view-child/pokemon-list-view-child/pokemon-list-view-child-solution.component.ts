import {Component, OnInit, ViewChild} from '@angular/core';
import {PokemonDetailViewChildSolutionComponent} from "../pokemon-detail-view-child/pokemon-detail-view-child-solution.component";
import {Pokemon} from "../../../model/pokemon";
import {PokemonCreatorService} from "../../../pokemon-creator.service";

@Component({
  selector: 'app-pokemon-list-view-child-solution',
  templateUrl: './pokemon-list-view-child-solution.component.html',
  styleUrls: ['./pokemon-list-view-child-solution.component.css']
})
export class PokemonListViewChildSolutionComponent implements OnInit {

  @ViewChild(PokemonDetailViewChildSolutionComponent)
  pokemonDetailComponent: PokemonDetailViewChildSolutionComponent;

  private monstas: Pokemon[] = [];

  constructor(private pokemonCreatorService: PokemonCreatorService) {
  }

  ngOnInit() {
    this.monstas = this.pokemonCreatorService.createPokemons();
  }

  selectPokemon(pokemon: Pokemon): void {
    this.pokemonDetailComponent.pokemon = pokemon;
  }

}
