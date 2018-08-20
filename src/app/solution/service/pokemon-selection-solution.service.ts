import {Injectable} from '@angular/core';
import {Subject} from "rxjs";
import {Pokemon} from "../../model/pokemon";

@Injectable({
  providedIn: 'root'
})
export class PokemonSelectionSolutionService {

  constructor() {
  }

  private pokemonSelectedSource = new Subject<Pokemon>();

  pokemonSelected$ = this.pokemonSelectedSource.asObservable();

  selectPokemon(pokemon: Pokemon): void {
    this.pokemonSelectedSource.next(pokemon);
  }

}
