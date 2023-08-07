import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Actions, Store, ofActionSuccessful } from '@ngxs/store';
import { LinkMenuEnum } from '../../model/menu.enun';
import { TriggerMenuButton } from 'src/ngxs/action/app.action';
import { SubSink } from 'subsink';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {

  private subs = new SubSink();

  constructor(private store: Store, 
              private action$: Actions){
    
    this.subs.add(
      this.listenToTriggerMenu()
    );
  }

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

  listenToTriggerMenu(){
    return this.action$.pipe(ofActionSuccessful(TriggerMenuButton)).subscribe((resp) => {
      if(resp.pageNav){
        this.goToPage(resp.pageNav);
      };
    })
  }

  goToPage(pageNav: LinkMenuEnum): void{
    this.resetPaddingTop();
    switch (pageNav) {
      case LinkMenuEnum.HOME:
        this.divhome.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        break;
      case LinkMenuEnum.ABOUT:
        this.isAboutClick = true;
        this.divabout.nativeElement.scrollIntoView({ behavior: 'smooth' });
        break;
      case LinkMenuEnum.TODO:
        this.isToDoClick = true;
        this.divtodo.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start'});
        break;
      case LinkMenuEnum.EXP:
        this.isExpClick = true;
        this.divexperience.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start'});
        break;
      case LinkMenuEnum.FRL:
        this.isFreelanceClick = true;
        this.divfreelance.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start'});
        break;
      case LinkMenuEnum.CERT:
        this.isCertClick = true;
        this.divcert.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start'});
        break;
      case LinkMenuEnum.SKILL:
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

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
