import { Component, OnInit } from '@angular/core';
import { IMyOptions, IMyDayLabels } from 'mydatepicker-th';
import { ClaimService } from '../claim.service';
import { AlertService } from '../../alert.service';
import * as moment from 'moment';

@Component({
  selector: 'sc-send-status-page',
  templateUrl: './send-status-page.component.html',
  styleUrls: ['./send-status-page.component.css']
})
export class SendStatusPageComponent implements OnInit {
  myDatePickerOptions: IMyOptions = {
    dateFormat: 'dd mmm yyyy',
    editableDateField: false,
    showClearDateBtn: false
  };

  ucStart: any;
  ucEnd: any;
  ucServiceType: any;
  isUCOpd = false; // ipd = false, opd = true

  totalPriceLateIpd = 0;
  totalPriceLateOpd = 0;
  opdStartDate: any;
  opdEndDate: any;
  notSendLists: any = [];
  notSendListsOpd: any = [];
  loadingUc = false;

  constructor(
    private claimService: ClaimService,
    private alertService: AlertService
  ) {
    this.ucStart = { date: { year: moment().get('year'), month: moment().get('month') + 1, day: moment().get('date') } };
    this.ucEnd = { date: { year: moment().get('year'), month: moment().get('month') + 1, day: moment().get('date') } };
    this.opdStartDate = { date: { year: moment().get('year'), month: moment().get('month') + 1, day: moment().get('date') } };
    this.opdEndDate = { date: { year: moment().get('year'), month: moment().get('month') + 1, day: moment().get('date') } };
  }

  ngOnInit() { }

  async showNotSendUC() {
    const start = `${this.ucStart.date.year}-${this.ucStart.date.month}-${this.ucStart.date.day}`;
    const end = `${this.ucEnd.date.year}-${this.ucEnd.date.month}-${this.ucEnd.date.day}`;
    this.totalPriceLateIpd = 0;
    this.isUCOpd = this.ucServiceType === 'OP';
    try {
      this.loadingUc = true;
      this.notSendLists = [];
      const response = await this.claimService.getNotSendUC(start, end, this.ucServiceType);
      if (response.ok) {
        this.loadingUc = false;
        this.notSendLists = response.rows;
        response.rows.forEach(v => {
          this.totalPriceLateIpd += parseFloat(v.total_price);
        });
      } else {
        this.loadingUc = false;
        console.log(response.error);
        this.alertService.error();
      }
    } catch (error) {
      this.loadingUc = false;
      this.alertService.error(error.message);
    }

  }

  showNotSendOPDList() {

  }
}
