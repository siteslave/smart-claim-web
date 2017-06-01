import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
  onlineOffline: boolean;
  status: string;

  constructor(private router: Router) { }

  ngOnInit() { }

  logout() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('fullname');
    this.router.navigate(['login']);
  }
}
