import { FetchService } from './shared/services/fetch/fetch.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { MainComponent } from './pages/main/main.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { CharactersComponent } from './shared/components/characters/characters.component';
import { CharacterDetailsComponent } from './shared/components/character-details/character-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LocationsComponent } from './shared/components/locations/locations.component';
import { EpisodesComponent } from './shared/components/episodes/episodes.component';
import { HttpClientModule } from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    NavbarComponent,
    CharactersComponent,
    CharacterDetailsComponent,
    LocationsComponent,
    EpisodesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
