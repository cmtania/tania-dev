import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() clickExperience = new EventEmitter<string>();
  @Output() clickHome = new EventEmitter<string>();
  @Output() clickHeader = new EventEmitter<number>();

  headerNav: Array<string> = [
    'home','about','todo','experience','freelance'
  ]

  resumeLink: string = 'https://cmtania.github.io/resume/';

  ngOnInit(): void {
  }

  goToExperience(): void{
    console.log('experience clicked');
    this.clickExperience.emit('clicked');
  }

  goToHome(): void{
    console.log('clickHome clicked');
    this.clickHome.emit('clicked');
  }

  gotoPage(pageNav: number):void{
    console.log(pageNav);
    this.clickHeader.emit(pageNav);
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event: any) {
    console.log('scroll');
  }
}

