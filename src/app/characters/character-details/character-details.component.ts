import { Component, OnInit } from '@angular/core';
import { CharacterEventsEmitterDataService } from '../shared/character-event-emitter.service';
import { Character } from '../character.model';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {

  selectedCharacter: Character;

  constructor(private data: CharacterEventsEmitterDataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(character => this.selectedCharacter = character);
  }

}
