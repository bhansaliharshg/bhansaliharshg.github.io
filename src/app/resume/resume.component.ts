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
  resumeLink = 'https://drive.google.com/file/d/1voqdspJPqXJpJBPEjbJbONKkQzBcjgZ5/view?usp=sharing';
  constructor() { }

  ngOnInit(): void {
  }

}
