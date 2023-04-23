import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @ViewChild('divexperience') divexperience: any;
  @ViewChild('divhome') divhome: any;
  @ViewChild('divcert') divcert: any;
  @ViewChild('divabout') divabout: any;
  @ViewChild('divskills') divskills: any;
  
  isExpClick: boolean = false;
  isCertClick: boolean = false;
  isAboutClick: boolean = false;
  isSkillsClick: boolean = false;

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
    this.resetPaddingTop();
    console.log('here at main component', event);
    switch (event) {
      case 1:
        this.divhome.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        break;
      case 2:
        this.isAboutClick = true;
        this.divabout.nativeElement.scrollIntoView({ behavior: 'smooth' });
        break;
      case 3:
          //this.divhome.nativeElement.scrollIntoView({ behavior: 'smooth' });
          break;
      case 4:
        this.isExpClick = true;
        this.divexperience.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start'});
          break;
      case 5:
            // this.isExpClick = true;
            // this.divexperience.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start'});
          break;
      case 6:
          this.isCertClick = true;
          this.divcert.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start'});
          break;
      case 7:
          this.isSkillsClick = true;
          this.divskills.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start'});
          break;
      default:
        this.divhome.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start'});
        break;
    }
  }

  resetPaddingTop(): void {
    this.isAboutClick = false;
    this.isExpClick = false;
    this.isCertClick = false;
  }
}
