import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  @Input() isSkillsClick: boolean = false;
  certificateLink: Array<string> = ['https://courses.buri.io/view/user/certificate/c725f9b0-5bed-4951-a06a-fe0b7bec730a/pdf',
  'https://courses.buri.io/view/user/certificate/10be5a5d-8d80-459d-a353-190e255f54ce/pdf'];
  
  ngOnInit(): void {
  }
}
