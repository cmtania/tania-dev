import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input() isFreelanceClick: boolean = false;

  ngOnInit(): void {
  }
}
