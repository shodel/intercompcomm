import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonDetailWithServiceComponent } from './pokemon-detail-with-service.component';

describe('PokemonDetailWithServiceSolutionComponent', () => {
  let component: PokemonDetailWithServiceComponent;
  let fixture: ComponentFixture<PokemonDetailWithServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonDetailWithServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonDetailWithServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
