import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {PokemonListInOutComponent} from './in-out/pokemon-list-in-out/pokemon-list-in-out.component';
import {PokemonDetailInOutComponent} from './in-out/pokemon-detail-in-out/pokemon-detail-in-out.component';
import {RouterModule, Routes} from "@angular/router";
import {HelloComponent} from './hello/hello.component';
import {PokemonListViewChildComponent} from './view-child/pokemon-list-view-child/pokemon-list-view-child.component';
import {PokemonDetailViewChildComponent} from './view-child/pokemon-detail-view-child/pokemon-detail-view-child.component';
import {PokemonDetailWithServiceComponent} from './service/pokemon-detail-with-service/pokemon-detail-with-service.component';
import {PokemonListWithServiceComponent} from './service/pokemon-list-with-service/pokemon-list-with-service.component';
import {PokemonListWithServiceSolutionComponent} from "./solution/service/pokemon-list-with-service/pokemon-list-with-service-solution.component";
import {PokemonDetailViewChildSolutionComponent} from "./solution/view-child/pokemon-detail-view-child/pokemon-detail-view-child-solution.component";
import {PokemonDetailWithServiceSolutionComponent} from "./solution/service/pokemon-detail-with-service/pokemon-detail-with-service-solution.component";
import {PokemonListViewChildSolutionComponent} from "./solution/view-child/pokemon-list-view-child/pokemon-list-view-child-solution.component";
import {PokemonDetailInOutSolutionComponent} from "./solution/in-out/pokemon-detail-in-out/pokemon-detail-in-out-solution.component";
import {PokemonListInOutSolutionComponent} from "./solution/in-out/pokemon-list-in-out/pokemon-list-in-out-solution.component";

const appRoutes: Routes = [
  {path: 'pokemonlistinout', component: PokemonListInOutComponent},
  {path: 'pokemonlistviewchild', component: PokemonListViewChildComponent},
  {path: 'pokemonlistwithservice', component: PokemonListWithServiceComponent},
  {path: 'solution/pokemonlistinout', component: PokemonListInOutSolutionComponent},
  {path: 'solution/pokemonlistviewchild', component: PokemonListViewChildSolutionComponent},
  {path: 'solution/pokemonlistwithservice', component: PokemonListWithServiceSolutionComponent},
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {path: '**', component: HelloComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    PokemonListInOutComponent,
    PokemonDetailInOutComponent,
    PokemonListViewChildComponent,
    PokemonDetailViewChildComponent,
    PokemonDetailWithServiceComponent,
    PokemonListWithServiceComponent,
    PokemonListInOutSolutionComponent,
    PokemonDetailInOutSolutionComponent,
    PokemonListViewChildSolutionComponent,
    PokemonDetailViewChildSolutionComponent,
    PokemonDetailWithServiceSolutionComponent,
    PokemonListWithServiceSolutionComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- debugging purposes only
    ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
