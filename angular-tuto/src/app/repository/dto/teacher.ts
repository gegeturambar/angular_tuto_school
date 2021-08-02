import { ObjectUnsubscribedError } from "rxjs";

export class Teacher {
    
    public static fromJson(json: any): Teacher {
        return new Teacher(json.firstname,json.lastname, json.email, json.school,json.courses,json.id);
    }

    constructor(
        public firstname: string,
        public lastname: string,
        public email: string,
        public school: string,
        public courses: [],
        public id?: number
    ){
    }
}