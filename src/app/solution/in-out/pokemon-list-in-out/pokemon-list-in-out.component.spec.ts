import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonListInOutSolutionComponent } from './pokemon-list-in-out-solution.component';

describe('PokemonListInOutSolutionComponent', () => {
  let component: PokemonListInOutSolutionComponent;
  let fixture: ComponentFixture<PokemonListInOutSolutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonListInOutSolutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonListInOutSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
