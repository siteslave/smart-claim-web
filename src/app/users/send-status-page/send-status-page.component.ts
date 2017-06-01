import { Component, OnInit } from '@angular/core';
import { IMyOptions, IMyDayLabels } from 'mydatepicker-th';
import { ClaimService } from "../claim.service";
import { AlertService } from "../../alert.service";
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

  ipdStartDate: any;
  ipdEndDate: any;

  totalPriceLateIpd = 0;
  totalPriceLateOpd = 0;
  opdStartDate: any;
  opdEndDate: any;
  notSendLists: any = [];
  notSendListsOpd: any = [];
  loading = false;
 
  constructor(
    private claimService: ClaimService,
    private alertService: AlertService
  ) {
    this.ipdStartDate = { date: { year: moment().get('year'), month: moment().get('month') + 1, day: moment().get('date') } };
    this.ipdEndDate = { date: { year: moment().get('year'), month: moment().get('month') + 1, day: moment().get('date') } };
    this.opdStartDate = { date: { year: moment().get('year'), month: moment().get('month') + 1, day: moment().get('date') } };
    this.opdEndDate = { date: { year: moment().get('year'), month: moment().get('month')  + 1, day: moment().get('date') } };
  }

  ngOnInit() {
  }

  showNotSendIPDList() {
    const _ipdStartDate = moment(this.ipdStartDate.jsdate).format('YYYY-MM-DD');
    const _ipdEndDate = moment(this.ipdEndDate.jsdate).format('YYYY-MM-DD');
    this.totalPriceLateIpd = 0;

    this.loading = true;
    this.claimService.getNotSendIPD(_ipdStartDate, _ipdEndDate)
      .then((result: any) => {
        if (result.ok) {
          this.notSendLists = result.rows;
          result.rows.forEach(v => {
            this.totalPriceLateIpd += parseFloat(v.total_price);
          });
        } else {
          console.log(result.error);
          this.alertService.error();
        }
        this.loading = false;
      })
      .catch(() => {
        this.loading = false;
        this.alertService.serverError();
      });
  }

  showNotSendOPDList() {

  }
}
