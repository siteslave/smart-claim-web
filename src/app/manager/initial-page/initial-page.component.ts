import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../manager.service';

@Component({
  selector: 'app-initial-page',
  templateUrl: './initial-page.component.html',
  styleUrls: ['./initial-page.component.css']
})
export class InitialPageComponent implements OnInit {

  constructor(private managerService: ManagerService) { }

  ngOnInit() { }

}
