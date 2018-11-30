import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Character } from './character.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
    private charactersUrl = 'https://marvel-node-app.herokuapp.com/characters';
    constructor(private http: HttpClient) {}
    getCharacters(): Observable<Character[]> {
        return this.http.get<Character[]>(this.charactersUrl);
    }
}
