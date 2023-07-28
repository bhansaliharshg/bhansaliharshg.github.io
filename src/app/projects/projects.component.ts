import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scroll(id: string) {
    let el = document.getElementById(id);
    el?.scrollIntoView({behavior: 'smooth'})
  }

}
