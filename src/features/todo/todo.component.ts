import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class ToDoComponent implements OnInit {

  @Input() isToDoClick: boolean = false;
  githubLink: Array<string> = ['https://github.com/cmtania/tania-dev',
  'https://github.com/cmtania/portfolio-vscodetheme',
  'https://github.com/cmtania/NodeJs-CreateDatabase','https://github.com/cmtania/BallGuessCup'];

  liveLink: Array<string> = ['https://cmtania.github.io/portfolio-vscodetheme/main','https://securranty-development.azurewebsites.net/Education.aspx',
  'https://securranty-development.azurewebsites.net//Student-Device-Insurance-Repairs.aspx'];
  
  ngOnInit(): void {
  }
}
