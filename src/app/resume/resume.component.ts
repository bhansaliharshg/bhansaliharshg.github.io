import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  capgemini = 'Capgemini Technology Services India Limited'
  pune = 'Pune, Maharashtra, India'
  aspire = 'Aspire Software Solutions'
  ahmedabad = 'Ahmedabad, Gujarat, India'
  cosywo = 'Cosywo Engineering Company'
  constructor() { }

  ngOnInit(): void {
  }

}
