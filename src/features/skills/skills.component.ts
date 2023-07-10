import { Component, Input, OnInit } from '@angular/core';
import { GetSkill, SkillModel } from '../../model/skills.model';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';
import { GetSkills } from 'src/ngxs/action/skill.action';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  @Input() isSkillsClick: boolean = false;
  @Input() tooltip: string = '';

  skills$: Observable<SkillModel[]>;

  constructor(private store: Store){
    this.skills$ = this.store.select(state => state.skills);
  }

  ngOnInit(): void {
    this.store.dispatch(new GetSkills());
  }
}
