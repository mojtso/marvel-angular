import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { Observable, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { CharacterService } from '../character.service';
import * as characterActions from "../state/character.actions";
import { Character } from '../character.model';


@Injectable()
export class CharacterEffect {
    
    constructor(private actions$: Actions, private characterService: CharacterService) {
    }

    @Effect()
    loadCharacters$: Observable<Action> = this.actions$.pipe(
        ofType<characterActions.LoadCharacters>(
            characterActions.CharacterActiontypes.LOAD_CHARACTERS
        ),
        mergeMap((actions: characterActions.LoadCharacters) => 
            this.characterService.getCharacters().pipe(
                map((charactors: Character[]) => 
                    new characterActions.LoadCharactersSuccess(charactors)
                ),
                catchError(err => of(new characterActions.LoadCharactersFail(err)))
            )
        )
    );
}

