import { Component, EventEmitter, HostListener, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { TriggerMenuButton } from '../../ngxs/action/app.action';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private store: Store){
  }

  checkvalue: boolean = false;

  @ViewChild('barNav') barNav: any;

  @ViewChild('ulHeader') ulHeader: any;

  ngOnInit(): void {
  }

  showMenu(value: boolean): void {
    this.checkvalue = value;
  }

  gotoPage(pageNav: number):void{
    this.store.dispatch(new TriggerMenuButton(pageNav));
  }

  goToResume() {
    const url = this.router.serializeUrl(
      this.router.createUrlTree([`/tania-dev/resume/`])
    );
    window.open(url, '_blank');
  }
}

