import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable } from "rxjs";

import { Character } from "./character.model";

@Injectable({
  providedIn: "root"
})
export class CharacterService {
    private charactersUrl = "http://localhost:3000/characters";
  
    constructor(private http: HttpClient) {}
  
    getCharacters(): Observable<{characters: Character[]}> {
        return this.http.get<{characters: Character[]}>(this.charactersUrl);
    }
}  