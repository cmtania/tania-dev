import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'freelance',
  templateUrl: './freelance.component.html',
  styleUrls: ['./freelance.component.scss']
})
export class FreelanceComponent implements OnInit {

  @Input() isFreelanceClick: boolean = false;

  ngOnInit(): void {
  }
}
