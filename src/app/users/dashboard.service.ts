import { Injectable, Inject } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DashboardService {

  constructor(
    @Inject('API_URL') private url: string,
    private authHttp: AuthHttp
  ) { }

  async getOFCClaimSummary() {
    const response = await this.authHttp.post(`${this.url}/claim-manager/summary/ofc`, {}).toPromise();
    return response.json();
  }

  async getUCSClaimSummary() {
    const response = await this.authHttp.post(`${this.url}/claim-manager/summary/ucs`, {}).toPromise();
    return response.json();
  }

  async getOFCClaimStatusReport() {
    const response = await this.authHttp.post(`${this.url}/claim-manager/summary/ofc/claim-report`, {}).toPromise();
    return response.json();
  }

  async getUCSClaimStatusReport() {
    const response = await this.authHttp.post(`${this.url}/claim-manager/summary/ucs/claim-report`, {}).toPromise();
    return response.json();
  }

}
