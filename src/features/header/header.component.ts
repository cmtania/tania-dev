import { Component, EventEmitter, HostListener, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router){
  }

  @Output() clickExperience = new EventEmitter<string>();
  @Output() clickHome = new EventEmitter<string>();
  @Output() clickHeader = new EventEmitter<number>();

  checkvalue: boolean = false;

  @ViewChild('barNav') barNav: any;

  @ViewChild('ulHeader') ulHeader: any;
  headerNav: Array<string> = [
    'home','about','todo','experience','freelance'
  ]

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

  goToResume() {
    const url = this.router.serializeUrl(
      this.router.createUrlTree([`/tania-dev/resume/`])
    );
    window.open(url, '_blank');
  }
}

