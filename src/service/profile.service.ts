import { Injectable } from "@angular/core";
import { GetSkill } from "../model/skills.model";
import { Observable, of } from "rxjs";


@Injectable({
        providedIn: 'root',
})
    
export class ProfileService{

    getSkills(): Observable<any> {
        return of(GetSkill.getList())
    }
}