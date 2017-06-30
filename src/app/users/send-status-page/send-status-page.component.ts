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

  startDate: any;
  endDate: any;
  serviceType: any;
  rightType: any;

  isOpd = false; // ipd = false, opd = true
  totalPrice = 0;
  notSendLists: any = [];

  loading = false;

  constructor(
    private claimService: ClaimService,
    private alertService: AlertService
  ) {
    this.startDate = { date: { year: moment().get('year'), month: moment().get('month') + 1, day: moment().get('date') } };
    this.endDate = { date: { year: moment().get('year'), month: moment().get('month') + 1, day: moment().get('date') } };
  }

  ngOnInit() { }

  async showNotSend() {
    const start = `${this.startDate.date.year}-${this.startDate.date.month}-${this.startDate.date.day}`;
    const end = `${this.endDate.date.year}-${this.endDate.date.month}-${this.endDate.date.day}`;
    this.totalPrice = 0;
    this.isOpd = this.serviceType === 'OP';
    try {
      this.loading = true;
      this.notSendLists = [];
      const response = await this.claimService.getNotSend(start, end, this.serviceType, this.rightType);
      if (response.ok) {
        this.loading = false;
        this.notSendLists = response.rows;
        response.rows.forEach(v => {
          this.totalPrice += parseFloat(v.total_price);
        });
      } else {
        this.loading = false;
        console.log(response.error);
        this.alertService.error();
      }
    } catch (error) {
      this.loading = false;
      this.alertService.error(error.message);
    }

  }
}
