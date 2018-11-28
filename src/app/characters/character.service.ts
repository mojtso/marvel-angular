import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Character } from './character.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
    // private charactersUrl = "http://localhost:3000/characters";
    private charactersUrl = 'https://gateway.marvel.com/v1/public/characters';

    constructor(private http: HttpClient) {}

    getCharacters(): Observable<Character[]> {
        // tslint:disable-next-line:max-line-length
        // const data = this.http.get<Character[]>(this.charactersUrl, {headers: new HttpHeaders().set('apikey', '60a07f6996f6157b689898fc65f03be9')});
        // console.log(data);


         const charactersData = [
          {
            id: 1,
            name: 'Agent Brand',
            description: 'test',
            modified: '2013-10-24T13:09:30-0400',
            thumbnail: 'http://i.annihil.us/u/prod/marvel/i/mg/4/60/52695285d6e7e',

          }
        ];

        return charactersData;
    }
}
