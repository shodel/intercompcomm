import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonDetailInOutSolutionComponent } from './pokemon-detail-in-out-solution.component';

describe('PokemonDetailInOutSolutionComponent', () => {
  let component: PokemonDetailInOutSolutionComponent;
  let fixture: ComponentFixture<PokemonDetailInOutSolutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonDetailInOutSolutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonDetailInOutSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
