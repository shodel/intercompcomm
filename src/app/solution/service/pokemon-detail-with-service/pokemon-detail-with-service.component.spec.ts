import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonDetailWithServiceSolutionComponent } from './pokemon-detail-with-service-solution.component';

describe('PokemonDetailWithServiceSolutionComponent', () => {
  let component: PokemonDetailWithServiceSolutionComponent;
  let fixture: ComponentFixture<PokemonDetailWithServiceSolutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonDetailWithServiceSolutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonDetailWithServiceSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
