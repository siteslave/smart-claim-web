import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opd-page',
  templateUrl: './opd-page.component.html',
  styleUrls: ['./opd-page.component.css']
})
export class OpdPageComponent implements OnInit {

  patients = [];
  
  constructor() { }

  ngOnInit() {
  }

}
