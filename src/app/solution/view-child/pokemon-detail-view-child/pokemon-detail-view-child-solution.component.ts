import {Component, OnInit} from '@angular/core';
import {Pokemon} from "../../../model/pokemon";

@Component({
  selector: 'app-pokemon-detail-view-child-solution',
  templateUrl: './pokemon-detail-view-child-solution.component.html',
  styleUrls: ['./pokemon-detail-view-child-solution.component.css']
})
export class PokemonDetailViewChildSolutionComponent implements OnInit {

  pokemon: Pokemon;

  constructor() {
  }

  ngOnInit() {
  }

}
