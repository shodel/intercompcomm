import {Component, OnInit} from '@angular/core';
import {Pokemon} from "../../model/pokemon";

@Component({
  selector: 'app-pokemon-detail-view-child',
  templateUrl: './pokemon-detail-view-child.component.html',
  styleUrls: ['./pokemon-detail-view-child.component.css']
})
export class PokemonDetailViewChildComponent implements OnInit {

  pokemon: Pokemon;

  constructor() {
  }

  ngOnInit() {
  }

}
