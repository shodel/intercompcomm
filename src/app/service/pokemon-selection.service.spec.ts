import { TestBed, inject } from '@angular/core/testing';

import { PokemonSelectionService } from './pokemon-selection.service';

describe('PokemonSelectionSolutionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PokemonSelectionService]
    });
  });

  it('should be created', inject([PokemonSelectionService], (service: PokemonSelectionService) => {
    expect(service).toBeTruthy();
  }));
});
