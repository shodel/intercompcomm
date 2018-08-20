import { TestBed, inject } from '@angular/core/testing';

import { PokemonSelectionSolutionService } from './pokemon-selection-solution.service';

describe('PokemonSelectionSolutionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PokemonSelectionSolutionService]
    });
  });

  it('should be created', inject([PokemonSelectionSolutionService], (service: PokemonSelectionSolutionService) => {
    expect(service).toBeTruthy();
  }));
});
