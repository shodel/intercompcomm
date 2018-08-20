import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonListWithServiceSolutionComponent } from './pokemon-list-with-service-solution.component';

describe('PokemonListWithServiceSolutionComponent', () => {
  let component: PokemonListWithServiceSolutionComponent;
  let fixture: ComponentFixture<PokemonListWithServiceSolutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonListWithServiceSolutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonListWithServiceSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
