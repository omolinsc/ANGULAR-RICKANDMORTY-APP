import { EpisodesComponent } from './shared/components/episodes/episodes.component';
import { LocationsComponent } from './shared/components/locations/locations.component';
import { CharacterDetailsComponent } from './shared/components/character-details/character-details.component';
import { CharactersComponent } from './shared/components/characters/characters.component';
import { MainComponent } from './pages/main/main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'characters', component: CharactersComponent },
  { path: 'characters/:id', component: CharacterDetailsComponent },
  { path: 'locations', component: LocationsComponent },
  { path: 'episodes', component: EpisodesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
