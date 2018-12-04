
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

export interface Character {
    id?: any;
    name: string;
    description: string;
    modified: string;
    thumbnail: Thumbnail;
    comics: Comic[];
    stories: Story[];
}

export interface Thumbnail {
    path: string;
    extension: string;
}

export interface Comic {
    resourceURI: string;
    name: string;
}

export interface Story {
    resourceURI: number;
    name: string;
}
