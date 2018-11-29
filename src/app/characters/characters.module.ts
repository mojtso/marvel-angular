import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { StoreModule } from '@ngrx/store';

import { EffectsModule, Actions } from '@ngrx/effects';

import { characterReducer } from '../characters/state/character.reducer';
import { CharacterEffect } from './state/character.effect';

import { CharacterComponent } from './character/character.component';
import { CharacterListComponent } from './character-list/character-list.component';

const characterRoutes: Routes = [
  { path: '', component: CharacterComponent },
  { path: '', component: CharacterListComponent },
];

@NgModule({
  declarations: [CharacterComponent, CharacterListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(characterRoutes),
    StoreModule.forFeature('characters', characterReducer),
    EffectsModule.forFeature([CharacterEffect])
  ]
})
export class CharactersModule { }
