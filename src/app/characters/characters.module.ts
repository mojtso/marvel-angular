import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { StoreModule } from '@ngrx/store';

import { EffectsModule, Actions } from '@ngrx/effects';

import { characterReducer } from '../characters/state/character.reducer';
import { CharacterEffect } from './state/character.effect';

import { CharacterComponent } from './character/character.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { CharacterEventsEmitterDataService } from './shared/character-event-emitter.service';

const characterRoutes: Routes = [
  { path: '', component: CharacterListComponent },
];

@NgModule({
  declarations: [CharacterComponent, CharacterListComponent, CharacterDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(characterRoutes),
    StoreModule.forFeature('characters', characterReducer),
    EffectsModule.forFeature([CharacterEffect]),
    ScrollingModule,
    MatGridListModule,
    MatCardModule,
  ],
  providers: [CharacterEventsEmitterDataService]
})
export class CharactersModule { }
