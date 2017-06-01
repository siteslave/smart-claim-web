import { Component, OnInit, Inject } from '@angular/core';
import { ManagerService } from '../manager.service';
@Component({
  selector: 'app-attendances-page',
  templateUrl: './attendances-page.component.html',
  styleUrls: ['./attendances-page.component.css']
})
export class AttendancesPageComponent implements OnInit {

  token: string;
  constructor(
    private managerService: ManagerService,
    @Inject('API_URL') private url: string
  ) { }

  ngOnInit() { }

}
