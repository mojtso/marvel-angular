import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as characterActions from '../state/character.actions';
import { Character } from '../character.model';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  characters$;

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.characters$ = this.store.dispatch(new characterActions.LoadCharacters());
    console.log(this.characters$)
  }
}
