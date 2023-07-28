import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scroll(id: string) {
    let el = document.getElementById(id);
    el?.scrollIntoView({behavior: 'smooth'})
  }

}
