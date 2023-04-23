import { Component, EventEmitter, HostListener, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() clickExperience = new EventEmitter<string>();
  @Output() clickHome = new EventEmitter<string>();
  @Output() clickHeader = new EventEmitter<number>();

  checkvalue: boolean = false;

  @ViewChild('barNav') barNav: any;

  @ViewChild('ulHeader') ulHeader: any;
  headerNav: Array<string> = [
    'home','about','todo','experience','freelance'
  ]

  resumeLink: string = 'https://cmtania.github.io/resume/';

  ngOnInit(): void {
  }


  showMenu(value: boolean): void {
    this.checkvalue = value;
  }

  goToExperience(): void{
    this.clickExperience.emit('clicked');
  }

  goToHome(): void{
    this.clickHome.emit('clicked');
  }

  gotoPage(pageNav: number):void{
    this.clickHeader.emit(pageNav);
  }

  // @HostListener('window:scroll', ['$event']) // for window scroll events
  // onScroll(event: any) {
  //   console.log('scroll');
  // }
}

