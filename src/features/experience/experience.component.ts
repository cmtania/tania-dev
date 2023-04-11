import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  @Input() isExpClick: boolean = false;

  ngOnInit(): void {
  }
}
