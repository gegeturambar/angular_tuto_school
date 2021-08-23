import { ObjectUnsubscribedError } from "rxjs";
import { Pupil } from "./pupil";

export class Teacher {

    public static fromJson(json: any): Teacher {
        return new Teacher(json.firstname,json.lastname, json.email, json.school,json.courses,json.id);
    }

    public static toJson(teacher : Teacher){
      console.log('ici');
      console.log(teacher);
      let o = Object.create(teacher);
      console.log(o);
      return o;
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
