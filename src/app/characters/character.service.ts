import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable } from "rxjs";

import { Character } from "./character.model";

@Injectable({
  providedIn: "root"
})
export class CharacterService {
    // private charactersUrl = "http://localhost:3000/characters";
    private charactersUrl = "https://gateway.marvel.com/v1/public/characters";
  
    constructor(private http: HttpClient) {}
  
    getCharacters(): Observable<Character[]> {
        let data = this.http.get<Character[]>(this.charactersUrl, {headers: new HttpHeaders().set('apikey', '60a07f6996f6157b689898fc65f03be9')});
        console.log(data);

        

        return data;
    }
}  