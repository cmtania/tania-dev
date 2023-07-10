import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngxs/store';
import { GetSkills } from 'src/ngxs/action/skill.action';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private store: Store){}

  @ViewChild('divexperience') divexperience: any;
  @ViewChild('divhome') divhome: any;
  @ViewChild('divcert') divcert: any;
  @ViewChild('divabout') divabout: any;
  @ViewChild('divskills') divskills: any;
  @ViewChild('divfreelance') divfreelance: any;
  @ViewChild('divtodo') divtodo: any;
  
  isExpClick: boolean = false;
  isCertClick: boolean = false;
  isAboutClick: boolean = false;
  isSkillsClick: boolean = false;
  isFreelanceClick: boolean = false;
  isToDoClick: boolean = false;

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
        this.isToDoClick = true;
        this.divtodo.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start'});
          break;
      case 4:
        this.isExpClick = true;
        this.divexperience.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start'});
          break;
      case 5:
            this.isFreelanceClick = true;
            this.divfreelance.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start'});
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
    this.isFreelanceClick = false;
    this.isSkillsClick = false;
    this.isToDoClick = false;
  }
}
