import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonListViewChildComponent } from './pokemon-list-view-child.component';

describe('PokemonListViewChildSolutionComponent', () => {
  let component: PokemonListViewChildComponent;
  let fixture: ComponentFixture<PokemonListViewChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonListViewChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonListViewChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
