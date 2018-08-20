import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonListViewChildSolutionComponent } from './pokemon-list-view-child-solution.component';

describe('PokemonListViewChildSolutionComponent', () => {
  let component: PokemonListViewChildSolutionComponent;
  let fixture: ComponentFixture<PokemonListViewChildSolutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonListViewChildSolutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonListViewChildSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
