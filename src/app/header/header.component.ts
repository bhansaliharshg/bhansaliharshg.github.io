import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  aboutMeActive = true;
  resumeActive = false;
  projectsActive = false;
  resumeLink = 'https://drive.google.com/file/d/1uTwni9-IrIB58g5xhHnXPV3qNMurGuOC/view?usp=sharing';
  constructor() { }

  ngOnInit(): void {
    this.aboutMeActive = true;
    this.resumeActive = false;
    this.projectsActive = false;
  }

  changeActiveTab(tabName: String) {
    if (tabName == 'about-me') {
      this.aboutMeActive = true;
      this.resumeActive = false;
      this.projectsActive = false;
    } else if (tabName == 'projects') {
      this.aboutMeActive = false;
      this.resumeActive = false;
      this.projectsActive = true;
    } else {
      this.aboutMeActive = false;
      this.resumeActive = true;
      this.projectsActive = false;
    }
  }

  scroll(id: string) {
    let el = document.getElementById(id);
    el?.scrollIntoView({behavior: 'smooth'})
}

}
