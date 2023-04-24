import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  @Input() isCertClick: boolean = false;
  certificateLink: Array<string> = ['https://courses.buri.io/view/user/certificate/c725f9b0-5bed-4951-a06a-fe0b7bec730a/pdf',
  'https://courses.buri.io/view/user/certificate/10be5a5d-8d80-459d-a353-190e255f54ce/pdf'];
  contact =  {
    Email: 'mailto:tania.dev.ph@gmail.com',
    Linkedin: 'https://www.linkedin.com/in/taniachristian/',
    Github: 'https://github.com/cmtania',
    Instagram: 'https://www.instagram.com/_xtiantaniaaaa/',
   };
  ngOnInit(): void {
  }
}
