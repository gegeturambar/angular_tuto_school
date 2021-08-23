import { ApiService } from "src/app/services/api.service";
import { environment } from "src/environments/environment";
import { School } from "./school";


export class Pupil {

    public static fromJson(json: any): Pupil {
        return new Pupil(json.firstname, json.lastname,json.email,json.school,json.id);
    }

    public static toJson(pupil : Pupil){
      let o = Object.assign(pupil);
      o.school = environment.apiPathname+"/schools/"+pupil.school?.id;
      return o;
    }

    constructor(
        public firstname: string,
        public lastname: string,
        public email: string,
        public school?: School    ,
        public id?: number
    ){
    }
}
