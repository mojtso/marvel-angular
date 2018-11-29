import { Action } from '@ngrx/store';
import { Character } from '../character.model';

export enum CharacterActiontypes {
    LOAD_CHARACTERS = '[Character] Load Characters.',
    LOAD_CHARACTERS_SUCCESS = 'Character] Load Characters Success',
    LOAD_CHARACTERS_FAIL = '[Character] Load Characters Fail'
}

export class LoadCharacters implements Action {
    readonly type = CharacterActiontypes.LOAD_CHARACTERS;

}

export class LoadCharactersSuccess implements Action {
    readonly type = CharacterActiontypes.LOAD_CHARACTERS_SUCCESS;

    constructor(public payload:  Character[]) {
    }
}

export class LoadCharactersFail implements Action {
    readonly type = CharacterActiontypes.LOAD_CHARACTERS_FAIL;

    constructor(public payload: string) {}
}

export type Action = LoadCharacters | LoadCharactersSuccess | LoadCharactersFail;
