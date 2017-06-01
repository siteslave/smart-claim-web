import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../manager.service';

@Component({
  selector: 'app-process-page',
  templateUrl: './process-page.component.html',
  styleUrls: ['./process-page.component.css']
})
export class ProcessPageComponent implements OnInit {

  constructor(
    private managerService: ManagerService
  ) { }

  ngOnInit() { }

}
