import { Component, Input, OnInit } from '@angular/core';
import { GetSkill, SkillModel } from '../../model/skills.model';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  @Input() isSkillsClick: boolean = false;
  @Input() tooltip: string = '';

  getSkill = new GetSkill();
  skillList: Array<SkillModel> = [];

  sample: string = 'testttt';
  
  ngOnInit(): void {
    this.skillList = this.getSkill.getList();
  }
}
