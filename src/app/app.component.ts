import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  constructor(private router: Router){}

  ngOnInit(): void {
    console.log(window.performance.getEntriesByType("navigation")[0].toJSON()['type'])
    if (window.performance.getEntriesByType("navigation")[0].toJSON()['type'] == 'reload') {
      this.router.navigateByUrl(window.origin);
    }
  }

}
