import {Component, OnDestroy, OnInit} from '@angular/core';
import {Pokemon} from "../../model/pokemon";

@Component({
  selector: 'app-pokemon-detail-with-service',
  templateUrl: './pokemon-detail-with-service.component.html',
  styleUrls: ['./pokemon-detail-with-service.component.css']
})
export class PokemonDetailWithServiceComponent implements OnInit, OnDestroy {

  private pokemon: Pokemon;
  // TODO: Subscription hinzufügen

  // TODO: Service einbinden
  constructor() {

  }

  ngOnInit() {
    // TODO: Auf Pokemon-Auswahl im Service subscriben
  }

  ngOnDestroy() {
    // TODO: "Unsubscriben"
  }

}
