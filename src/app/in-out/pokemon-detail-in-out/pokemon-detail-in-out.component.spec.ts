import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonDetailInOutComponent } from './pokemon-detail-in-out.component';

describe('PokemonDetailInOutSolutionComponent', () => {
  let component: PokemonDetailInOutComponent;
  let fixture: ComponentFixture<PokemonDetailInOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonDetailInOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonDetailInOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
