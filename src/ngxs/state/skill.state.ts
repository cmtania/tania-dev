// Section 1
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { SkillModel } from 'src/model/skills.model';
import { GetSkills } from '../action/skill.action';
import { ProfileService } from '../../service/profile.service';
import { tap } from 'rxjs';
import { Injectable } from '@angular/core';


export interface ISkillStateModel{
    skills: SkillModel[]
}

@State<ISkillStateModel>({
    name: 'skills',
    defaults: {
        skills: []
    }
})

@Injectable()
export class SkillState {

    constructor(private profileService: ProfileService){}

    @Selector()
    static getDataSkills(state: ISkillStateModel) {
        return state.skills
    }

    @Action(GetSkills)
    getSkills({setState}: StateContext<ISkillStateModel[]>) {
        return this.profileService.getSkills().pipe(
            tap((res) => setState(res))
          );
    }

}