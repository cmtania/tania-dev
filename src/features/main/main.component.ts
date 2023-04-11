import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @ViewChild('divexperience') divexperience: any;
  @ViewChild('divhome') divhome: any;
  isExpClick: boolean = false;
  
  ngOnInit(): void {
  }

  ngAfterViewInit(): void{
  }

  goToExperience(event: any): void{
    console.log('experience: here at main component');
    console.log(this.divexperience);
    this.divexperience.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  goToPage(event: any): void{
    this.isExpClick = false;
    console.log('here at main component', event);
    switch (event) {
      case 1:
        this.divhome.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        break;
      case 2:
        //this.divhome.nativeElement.scrollIntoView({ behavior: 'smooth' });
        break;
      case 3:
          //this.divhome.nativeElement.scrollIntoView({ behavior: 'smooth' });
          break;
      case 4:
        this.isExpClick = true;
        this.divexperience.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start'});
          break;
      default:
        this.divhome.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start'});
        break;
    }
  }
}
