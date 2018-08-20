import {Component, OnDestroy, OnInit} from '@angular/core';
import {PokemonSelectionSolutionService} from "../pokemon-selection-solution.service";
import {Subscription} from "rxjs";
import {Pokemon} from "../../../model/pokemon";

@Component({
  selector: 'app-pokemon-detail-with-service-solution',
  templateUrl: './pokemon-detail-with-service-solution.component.html',
  styleUrls: ['./pokemon-detail-with-service-solution.component.css']
})
export class PokemonDetailWithServiceSolutionComponent implements OnInit, OnDestroy {

  private pokemon: Pokemon;
  subscription: Subscription;

  constructor(private pokemonSelectionService: PokemonSelectionSolutionService) {
  }

  ngOnInit() {
    this.subscription = this.pokemonSelectionService.pokemonSelected$.subscribe(
      pokemon => {
        this.pokemon = pokemon;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
