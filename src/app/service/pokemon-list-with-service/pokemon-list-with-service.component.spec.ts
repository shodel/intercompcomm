import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonListWithServiceComponent } from './pokemon-list-with-service.component';

describe('PokemonListWithServiceSolutionComponent', () => {
  let component: PokemonListWithServiceComponent;
  let fixture: ComponentFixture<PokemonListWithServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonListWithServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonListWithServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
