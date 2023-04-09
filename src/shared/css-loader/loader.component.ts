import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  timer: number = 2000;
  isLoading: boolean = true;
  ngOnInit(){
    setTimeout(() => {
      this.isLoading = false;
    }, this.timer);
  }
}
