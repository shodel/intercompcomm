import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonListInOutComponent } from './pokemon-list-in-out.component';

describe('PokemonListInOutSolutionComponent', () => {
  let component: PokemonListInOutComponent;
  let fixture: ComponentFixture<PokemonListInOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonListInOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonListInOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
