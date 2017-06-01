import { Injectable, Inject } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';
import 'rxjs/add/operator/map';

@Injectable()
export class ClaimService {

  constructor(
    @Inject('API_URL') private url: string,
    private authHttp: AuthHttp
  ) { }

  getLogs() {
    return new Promise((resolve, reject) => {
      this.authHttp.get(`${this.url}/claim-manager/imports/logs`)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
    });
  }

  getNotSendIPD(start: any, end: any) {
    return new Promise((resolve, reject) => {
      this.authHttp.post(`${this.url}/claim-manager/ipd/not-send`, {
        start: start,
        end: end
      })
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
    });
  }

}
