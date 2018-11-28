import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import * as characterActions from '../state/character.actions';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  characters;

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.dispatch(new characterActions.LoadCharacters());
  }

}
