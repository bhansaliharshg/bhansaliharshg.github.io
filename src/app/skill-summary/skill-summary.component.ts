import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-summary',
  templateUrl: './skill-summary.component.html',
  styleUrls: ['./skill-summary.component.css']
})
export class SkillSummaryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scroll(id: string) {
    let el = document.getElementById(id);
    el?.scrollIntoView({behavior: 'smooth'})
  }

}
