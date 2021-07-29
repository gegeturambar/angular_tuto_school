import { ObjectUnsubscribedError } from "rxjs";

export class School {
    
    public static fromJson(json: any): School {
        return new School(json.name, json.rooms,json.teachers,json.id);
    }

    constructor(
        public name: string,
        public rooms: [],
        public teachers: [],
        public id?: number
    ){
    }
}