import { Component, Input, OnInit } from '@angular/core';
import { GetFreelance, FreelanceModel } from '../../model/freelance.model';

@Component({
  selector: 'freelance',
  templateUrl: './freelance.component.html',
  styleUrls: ['./freelance.component.scss']
})
export class FreelanceComponent implements OnInit {

  @Input() isFreelanceClick: boolean = false;

  getFreelance = new GetFreelance();
  freelanceList: Array<FreelanceModel> = [];
  
  ngOnInit(): void {
    this.freelanceList = this.getFreelance.getList();
  }
}
