import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as characterActions from '../../app/characters/state/character.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  ngOnInit() {
    console.log('started');
  }

  showCharactersComponent() {

  }

}
