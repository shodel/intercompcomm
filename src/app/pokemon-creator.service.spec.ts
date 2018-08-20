import { TestBed, inject } from '@angular/core/testing';

import { PokemonCreatorService } from './pokemon-creator.service';

describe('PokemonCreatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PokemonCreatorService]
    });
  });

  it('should be created', inject([PokemonCreatorService], (service: PokemonCreatorService) => {
    expect(service).toBeTruthy();
  }));
});
