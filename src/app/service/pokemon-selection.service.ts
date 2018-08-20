import {Injectable} from '@angular/core';
import {Pokemon} from "../model/pokemon";

@Injectable({
  providedIn: 'root'
})
export class PokemonSelectionService {

  constructor() {
  }

  // TODO: Subject für "Pokemon ausgewählt" hinzufügen

  // TODO: Subject als Observable bereitstellen

  selectPokemon(pokemon: Pokemon): void {
    // TODO: Next-Notifikation aussenden
  }

}
