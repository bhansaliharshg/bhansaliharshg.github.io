import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leadership',
  templateUrl: './leadership.component.html',
  styleUrls: ['./leadership.component.css']
})
export class LeadershipComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scroll(id: string) {
    let el = document.getElementById(id);
    el?.scrollIntoView({behavior: 'smooth'})
  }

}
