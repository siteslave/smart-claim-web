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

  async getNotSendUC(start: any, end: any, type) {
    const response = await this.authHttp.post(`${this.url}/claim-manager/ucs/not-send`, {
      start: start,
      end: end,
      type: type
    }).toPromise();

    return response.json();
  }

}
