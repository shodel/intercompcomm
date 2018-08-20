import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonDetailViewChildSolutionComponent } from './pokemon-detail-view-child-solution.component';

describe('PokemonDetailViewChildSolutionComponent', () => {
  let component: PokemonDetailViewChildSolutionComponent;
  let fixture: ComponentFixture<PokemonDetailViewChildSolutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonDetailViewChildSolutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonDetailViewChildSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
