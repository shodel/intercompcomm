import {Injectable} from '@angular/core';
import {Pokemon} from "./model/pokemon";

@Injectable({
  providedIn: 'root'
})
export class PokemonCreatorService {

  constructor() { }

  public createPokemons(): Pokemon[] {
    let pokemons: Pokemon[] = [];

    let monsta1: Pokemon = new Pokemon();
    monsta1.name = "Schiggy";
    monsta1.nummer = "7";
    let monsta2: Pokemon = new Pokemon();
    monsta2.name = "Glumanda";
    monsta2.nummer = "4";
    let monsta3: Pokemon = new Pokemon();
    monsta3.name = "Bisasam";
    monsta3.nummer = "1";

    pokemons.push(monsta1, monsta2, monsta3);
    return pokemons;
  }
}
