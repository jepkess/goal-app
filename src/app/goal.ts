import { from } from "rxjs";

export class Goal {
    showdescription: boolean;
    constructor(public id:number, public name:string, public description:string , public completeDate:Date){
        this.showdescription = false;

    }
  
}
