import * as characterActions from './character.actions';
import { Character } from '../character.model';
import * as fromRoot from '../../state/app-state';

export interface CharacterState {
    characters: Character[];
    loading: boolean;
    loaded: boolean;
    error: string;
}

export interface AppState extends fromRoot.AppState {
    characters: CharacterState;
}

export const initialState: CharacterState = {
    characters: [],
    loading: false,
    loaded: false,
    error: '',
};

export function characterReducer(state = initialState, action: characterActions.Action): CharacterState {
    switch (action.type) {
        case characterActions.CharacterActiontypes.LOAD_CHARACTERS: {
            return {
                ...state,
                loading: true,
            };
        }

        case characterActions.CharacterActiontypes.LOAD_CHARACTERS_SUCCESS: {
            return {
                ...state,
                loading: false,
                loaded: true,
                characters: action.payload,
            };
        }

        case characterActions.CharacterActiontypes.LOAD_CHARACTERS_FAIL: {
            return {
                ...state,
                characters: [],
                loading: false,
                loaded: false,
            };
        }
        default: {
            return state;
        }
    }
}

/**
 *
 *
 *
 */

 /*
{
    "id": 1011297,
    "name": "Agent Brand",
    "description": "",
    "modified": "2013-10-24T13:09:30-0400",
    "thumbnail": {
        "path": "http://i.annihil.us/u/prod/marvel/i/mg/4/60/52695285d6e7e",
        "extension": "jpg"
}
**/
/*
const initialState = {
    characters: [
        {
            id: 1,
            name: "Storm",
            description: "Test",
            modified: "2013-10-24T13:09:30-0400",
            thumbnail: {
                path: "http://i.annihil.us/u/prod/marvel/i/mg/4/60/52695285d6e7e",
                extension: "jpg"
            }
        }

    ],
    loading: false,
    loaded: true
};

export function characterReducer(state = initialState, actions) {
    switch(actions.type) {
        case "LOAD_CHARACTERS": {
            return {
                ...state,
                loading: true,
                loader: false
            }
        }

        default: {
            return state;
        }
    }
}
*/
