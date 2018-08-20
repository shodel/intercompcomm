import {Component, OnInit} from '@angular/core';
import {Pokemon} from "../../model/pokemon";
import {PokemonCreatorService} from "../../pokemon-creator.service";

@Component({
  selector: 'app-pokemon-list-view-child',
  templateUrl: './pokemon-list-view-child.component.html',
  styleUrls: ['./pokemon-list-view-child.component.css']
})
export class PokemonListViewChildComponent implements OnInit {

  // TODO: Detail-Komponente als ViewChild einbinden

  private monstas: Pokemon[] = [];

  constructor(private pokemonCreatorService: PokemonCreatorService) {
  }

  ngOnInit() {
    this.monstas = this.pokemonCreatorService.createPokemons();
  }

  selectPokemon(pokemon: Pokemon): void {
    // TODO: Pokemon auf Detail-Komponente setzen
  }

}
