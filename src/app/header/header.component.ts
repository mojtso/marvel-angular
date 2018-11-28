import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import {CharacterService } from '../characters/character.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(){}

  ngOnInit() {
    console.log('started');
  }

  showCharactersComponent() {
  }

}
