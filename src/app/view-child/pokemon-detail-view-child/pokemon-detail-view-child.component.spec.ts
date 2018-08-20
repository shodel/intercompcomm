import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonDetailViewChildComponent } from './pokemon-detail-view-child.component';

describe('PokemonDetailViewChildSolutionComponent', () => {
  let component: PokemonDetailViewChildComponent;
  let fixture: ComponentFixture<PokemonDetailViewChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonDetailViewChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonDetailViewChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
