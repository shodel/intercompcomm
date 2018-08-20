import {Component, OnInit} from '@angular/core';
import {Pokemon} from "../../model/pokemon";
import {PokemonCreatorService} from "../../pokemon-creator.service";

@Component({
  selector: 'app-pokemon-list-with-service',
  templateUrl: './pokemon-list-with-service.component.html',
  styleUrls: ['./pokemon-list-with-service.component.css']
})
export class PokemonListWithServiceComponent implements OnInit {

  private monstas: Pokemon[] = [];

  // TODO: Service einbinden
  constructor(private pokemonCreatorService: PokemonCreatorService) {
  }

  ngOnInit() {
    this.monstas = this.pokemonCreatorService.createPokemons();
  }

  selectPokemon(pokemon: Pokemon): void {
    // TODO: Pokemon über Service auswählen

  }
}
