import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Pokemon} from "../../../model/pokemon";

@Component({
  selector: 'app-pokemon-detail-in-out-solution',
  templateUrl: './pokemon-detail-in-out-solution.component.html',
  styleUrls: ['./pokemon-detail-in-out-solution.component.css']
})
export class PokemonDetailInOutSolutionComponent implements OnInit {

  @Input()
  private pokemon: Pokemon;

  @Output()
  clickedDate: EventEmitter<Date> = new EventEmitter<Date>();

  constructor() { }

  ngOnInit() {
  }

  click() {
    this.clickedDate.emit(new Date());
  }

}
