import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngxs/store';
import { TriggerMenuButton } from 'src/ngxs/action/app.action';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private store: Store){}
  slideIn: boolean = true;
  @Output() clickHeader = new EventEmitter<number>();

  ngOnInit(): void {
  }

  gotoPage(pageNav: number): void{
    this.store.dispatch(new TriggerMenuButton(pageNav));
  }

  onFocus() {
    console.log('slide in');
    this.slideIn = false; // toggle off to reset the animation
    setTimeout(() => {
      this.slideIn = true; // toggle on to trigger the animation again
    }, 50); // wait a little before triggering the animation to ensure the toggle works
  }
  // desk PNG Designed By 588ku from https://pngtree.com/freepng/male-staff-jobs-the-man-programmer_3938662.html?sol=downref&id=bef
}
