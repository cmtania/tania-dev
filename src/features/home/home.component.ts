import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  slideIn: boolean = true;

  ngOnInit(): void {
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
