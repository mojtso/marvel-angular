import { Component, OnInit, Output } from '@angular/core';

import { Store } from '@ngrx/store';

import * as characterActions from '../state/character.actions';
import { EventEmitter } from 'protractor';
import { Character } from '../character.model';
import { CharacterEventsEmitterDataService } from '../shared/character-event-emitter.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  characters;

  constructor(private store: Store<any>, private data: CharacterEventsEmitterDataService) {
    this.store.dispatch(new characterActions.LoadCharacters());
  }

  ngOnInit() {
    this.store.subscribe(state => {
      this.characters = state.characters.characters;
    });
  }

  selectCharacter(character) {
    this.data.changeMessage(character);
  }
}
