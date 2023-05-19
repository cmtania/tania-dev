import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {	

	pdfSrc: string = 'assets/resume.pdf';

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

  downloadResume(): void{
	const timeStamp = new Date().getTime();
    let link = document.createElement("a");
    link.download = `christian_tania_resume_${timeStamp}`;
    link.href = "assets/resume.pdf";
    link.click();
  }
}
