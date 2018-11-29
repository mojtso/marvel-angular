import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Character } from '../character.model';

@Injectable()
export class CharacterEventsEmitterDataService {
  private messageSource = new BehaviorSubject<any>('default message');
  currentMessage = this.messageSource.asObservable();

  constructor() {  }

  changeMessage(message: Character) {
    this.messageSource.next(message);
  }

}
