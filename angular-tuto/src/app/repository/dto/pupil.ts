import { School } from "./school";

export class Pupil {

    public static fromJson(json: any): Pupil {
        return new Pupil(json.firstname, json.lastname,json.email,json.school,json.id);
    }

    constructor(
        public firstname: string,
        public lastname: string,
        public email: string,
        public school?: School,
        public id?: number
    ){
    }
}