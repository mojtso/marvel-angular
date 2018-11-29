import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as characterActions from '../state/character.actions';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  characters;

  constructor(private store: Store<any>) {
    this.store.dispatch(new characterActions.LoadCharacters());
  }

  ngOnInit() {
    this.store.subscribe(state => {
      this.characters = state.characters.characters;
      console.log(this.characters);
    });
  }
}
