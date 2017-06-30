import { Injectable, Inject } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ClaimService {

  constructor(
    @Inject('API_URL') private url: string,
    private authHttp: AuthHttp
  ) { }

  async getLogs() {
    const response = await this.authHttp.get(`${this.url}/claim-manager/imports/logs`).toPromise();
    return response.json();
  }

  async getNotSend(start: any, end: any, type, right) {
    const response = await this.authHttp.post(`${this.url}/claim-manager/not-send`, {
      start: start,
      end: end,
      type: type,
      right: right
    }).toPromise();

    return response.json();
  }

}
