import { ObjectUnsubscribedError } from "rxjs";

export class School {
    
    public static fromJson(json: any): School {
        return new School(json.id, json.name, json.rooms,json.teachers);
    }

    constructor(public id: number,
        public name: string,
        public rooms: [],
        public teachers: []
    ){
    }
}