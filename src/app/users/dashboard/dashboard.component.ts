import { AlertService } from './../../alert.service';
import { DashboardService } from './../dashboard.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import * as _ from 'lodash';
import * as moment from 'moment';

@Component({
  selector: 'sc-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

  dataIpd = [];
  dataOpd = [];
  isLoading = false;

  options: any;
  data: any;

  optionsOFCOpd;
  optionsOFCIpd;
  optionsUCSIpd;
  optionsUCSOpd;

  optionsOFCIpdSend;
  optionsOFCOpdSend;

  optionsUCSIpdSend;
  optionsUCSOpdSend;

  dataOfc = [];

  ofcIpdData: any;

  constructor(
    private dashboardService: DashboardService,
    private alertService: AlertService,
    private ref: ChangeDetectorRef
  ) {

  }

  ngOnInit() {
    this.getAllCharts();
  }

  async getAllCharts() {
    this.isLoading = true;

    await this.getOFCClaimSummary();
    await this.getUCSClaimSummary();
    await this.getOFCIpdClaimStatusReport();
    await this.getOFCOpdClaimStatusReport();
    await this.getUCSIpdClaimStatusReport();
    await this.getUCSOpdClaimStatusReport();
    this.ref.detectChanges();

    this.isLoading = false;
  }

  setChartOFCIpd(categories: any, series: any) {
    this.optionsOFCIpd = {
      chart: {
        type: 'column'
      },

      title: {
        text: 'ยอดส่งเบิกผู้ป่วยใน สิทธิข้าราชการ (OFC)'
      },

      subtitle: {
        text: 'ข้อมูลจาก REP ที่ส่งเบิกในช่วงเวลาที่กำหนด'
      },
      // legend: {
      //   align: 'right',
      //   verticalAlign: 'middle',
      //   layout: 'vertical'
      // },

      xAxis: {
        categories: categories,
        labels: {
          x: -10
        }
      },

      yAxis: {
        allowDecimals: true,
        title: {
          text: 'บาท'
        }
      },

      series: series,

      responsive: {
        rules: [{
          condition: {
            maxWidth: 400
          },
          chartOptions: {
            legend: {
              align: 'center',
              verticalAlign: 'bottom',
              layout: 'horizontal'
            },
            yAxis: {
              labels: {
                align: 'left',
                x: 0,
                y: -5
              },
              title: {
                text: null
              }
            },
            subtitle: {
              text: null
            },
            credits: {
              enabled: false
            }
          }
        }]
      }
    };
  }

  setChartOFCOpd(categories: any, series: any) {
    this.optionsOFCOpd = {
      chart: {
        type: 'column'
      },

      title: {
        text: 'ยอดส่งเบิกผู้ป่วยนอก สิทธิข้าราชการ (OFC)'
      },

      subtitle: {
        text: 'ข้อมูลจาก REP ที่ส่งเบิกในช่วงเวลาที่กำหนด'
      },
      // legend: {
      //   align: 'right',
      //   verticalAlign: 'middle',
      //   layout: 'vertical'
      // },

      xAxis: {
        categories: categories,
        labels: {
          x: -10
        }
      },

      yAxis: {
        allowDecimals: true,
        title: {
          text: 'บาท'
        }
      },

      series: series,

      responsive: {
        rules: [{
          condition: {
            maxWidth: 400
          },
          chartOptions: {
            legend: {
              align: 'center',
              verticalAlign: 'bottom',
              layout: 'horizontal'
            },
            yAxis: {
              labels: {
                align: 'left',
                x: 0,
                y: -5
              },
              title: {
                text: null
              }
            },
            subtitle: {
              text: null
            },
            credits: {
              enabled: false
            }
          }
        }]
      }
    };
  }

  setChartUCSIpd(categories: any, series: any) {
    this.optionsUCSIpd = {
      chart: {
        type: 'column'
      },

      title: {
        text: 'ยอดส่งเบิกผู้ป่วยใน สิทธิหลักประกันสุขภาพถ้วนหน้า (UCS/WEL)'
      },

      subtitle: {
        text: 'ข้อมูลจาก REP ที่ส่งเบิกในช่วงเวลาที่กำหนด'
      },
      // legend: {
      //   align: 'right',
      //   verticalAlign: 'middle',
      //   layout: 'vertical'
      // },

      xAxis: {
        categories: categories,
        labels: {
          x: -10
        }
      },

      yAxis: {
        allowDecimals: true,
        title: {
          text: 'บาท'
        }
      },

      series: series,

      responsive: {
        rules: [{
          condition: {
            maxWidth: 400
          },
          chartOptions: {
            legend: {
              align: 'center',
              verticalAlign: 'bottom',
              layout: 'horizontal'
            },
            yAxis: {
              labels: {
                align: 'left',
                x: 0,
                y: -5
              },
              title: {
                text: null
              }
            },
            subtitle: {
              text: null
            },
            credits: {
              enabled: false
            }
          }
        }]
      }
    };
  }

  setChartUCSOpd(categories: any, series: any) {
    this.optionsUCSOpd = {
      chart: {
        type: 'column'
      },

      title: {
        text: 'ยอดส่งเบิกผู้ป่วยนอก สิทธิหลักประกันสุขภาพถ้วนหน้า (UCS/WEL)'
      },

      subtitle: {
        text: 'ข้อมูลจาก REP ที่ส่งเบิกในช่วงเวลาที่กำหนด'
      },
      // legend: {
      //   align: 'right',
      //   verticalAlign: 'middle',
      //   layout: 'vertical'
      // },

      xAxis: {
        categories: categories,
        labels: {
          x: -10
        }
      },

      yAxis: {
        allowDecimals: true,
        title: {
          text: 'บาท'
        }
      },

      series: series,

      responsive: {
        rules: [{
          condition: {
            maxWidth: 400
          },
          chartOptions: {
            legend: {
              align: 'center',
              verticalAlign: 'bottom',
              layout: 'horizontal'
            },
            yAxis: {
              labels: {
                align: 'left',
                x: 0,
                y: -5
              },
              title: {
                text: null
              }
            },
            subtitle: {
              text: null
            },
            credits: {
              enabled: false
            }
          }
        }]
      }
    };
  }

  setChartOFCIpdSendStatus(categories: any, series: any) {
    this.optionsOFCIpdSend = {
      chart: {
        type: 'column'
      },

      title: {
        text: 'สรุปการส่ง/ค้างส่งเบิกผู้ป่วยใน (IPD)'
      },

      xAxis: {
        categories: categories,
        title: {
          text: 'เดือนที่ให้บริการ'
        }
      },

      yAxis: {
        allowDecimals: false,
        min: 0,
        title: {
          text: 'รายการ'
        },
        stackLabels: {
          enabled: true,
          style: {
            fontWeight: 'bold',
            color: 'gray'
          }
        }
      },
      legend: {
        align: 'right',
        x: -30,
        verticalAlign: 'top',
        y: 25,
        floating: true,
        backgroundColor: 'white',
        borderColor: '#CCC',
        borderWidth: 1,
        shadow: false
      },
      plotOptions: {
        column: {
          stacking: 'normal',
          dataLabels: {
            enabled: true,
            color: 'white'
          }
        }
      },
      tooltip: {
        formatter: function () {
          return '<b>' + this.x + '</b><br/>' +
            this.series.name + ': ' + this.y + '<br/>' +
            'Total: ' + this.point.stackTotal;
        }
      },
      series: series,
      responsive: {
        rules: [{
          condition: {
            maxWidth: 400
          },
          chartOptions: {
            legend: {
              align: 'center',
              verticalAlign: 'bottom',
              layout: 'horizontal'
            },
            yAxis: {
              labels: {
                align: 'left',
                x: 0,
                y: -5
              },
              title: {
                text: null
              }
            },
            subtitle: {
              text: null
            },
            credits: {
              enabled: false
            }
          }
        }]
      }
    }
  }

  setChartOFCOpdSendStatus(categories: any, series: any) {
    this.optionsOFCOpdSend = {
      chart: {
        type: 'column'
      },

      title: {
        text: 'สรุปการส่ง/ค้างส่งเบิกผู้ป่วยนอก (OPD)'
      },

      xAxis: {
        categories: categories,
        title: {
          text: 'เดือนที่ให้บริการ'
        }
      },

      yAxis: {
        allowDecimals: false,
        min: 0,
        title: {
          text: 'รายการ'
        },
        stackLabels: {
          enabled: true,
          style: {
            fontWeight: 'bold',
            color: 'gray'
          }
        }
      },
      legend: {
        align: 'right',
        x: -30,
        verticalAlign: 'top',
        y: 25,
        floating: true,
        backgroundColor: 'white',
        borderColor: '#CCC',
        borderWidth: 1,
        shadow: false
      },
      plotOptions: {
        column: {
          stacking: 'normal',
          dataLabels: {
            enabled: true,
            color: 'white'
          }
        }
      },
      tooltip: {
        formatter: function () {
          return '<b>' + this.x + '</b><br/>' +
            this.series.name + ': ' + this.y + '<br/>' +
            'Total: ' + this.point.stackTotal;
        }
      },
      series: series,
      responsive: {
        rules: [{
          condition: {
            maxWidth: 400
          },
          chartOptions: {
            legend: {
              align: 'center',
              verticalAlign: 'bottom',
              layout: 'horizontal'
            },
            yAxis: {
              labels: {
                align: 'left',
                x: 0,
                y: -5
              },
              title: {
                text: null
              }
            },
            subtitle: {
              text: null
            },
            credits: {
              enabled: false
            }
          }
        }]
      }
    }
  }

  setChartUCSIpdSendStatus(categories: any, series: any) {
    this.optionsUCSIpdSend = {
      chart: {
        type: 'column'
      },

      title: {
        text: 'สรุปการส่ง/ค้างส่งเบิกผู้ป่วยใน (IPD)'
      },

      xAxis: {
        categories: categories,
        title: {
          text: 'เดือนที่ให้บริการ'
        }
      },

      yAxis: {
        allowDecimals: false,
        min: 0,
        title: {
          text: 'รายการ'
        },
        stackLabels: {
          enabled: true,
          style: {
            fontWeight: 'bold',
            color: 'gray'
          }
        }
      },
      legend: {
        align: 'right',
        x: -30,
        verticalAlign: 'top',
        y: 25,
        floating: true,
        backgroundColor: 'white',
        borderColor: '#CCC',
        borderWidth: 1,
        shadow: false
      },
      plotOptions: {
        column: {
          stacking: 'normal',
          dataLabels: {
            enabled: true,
            color: 'white'
          }
        }
      },
      tooltip: {
        formatter: function () {
          return '<b>' + this.x + '</b><br/>' +
            this.series.name + ': ' + this.y + '<br/>' +
            'Total: ' + this.point.stackTotal;
        }
      },
      series: series,
      responsive: {
        rules: [{
          condition: {
            maxWidth: 400
          },
          chartOptions: {
            legend: {
              align: 'center',
              verticalAlign: 'bottom',
              layout: 'horizontal'
            },
            yAxis: {
              labels: {
                align: 'left',
                x: 0,
                y: -5
              },
              title: {
                text: null
              }
            },
            subtitle: {
              text: null
            },
            credits: {
              enabled: false
            }
          }
        }]
      }
    }
  }

  setChartUCSOpdSendStatus(categories: any, series: any) {
    this.optionsUCSOpdSend = {
      chart: {
        type: 'column'
      },

      title: {
        text: 'สรุปการส่ง/ค้างส่งเบิกผู้ป่วยนอก (OPD)'
      },

      xAxis: {
        categories: categories,
        title: {
          text: 'เดือนที่ให้บริการ'
        }
      },

      yAxis: {
        allowDecimals: false,
        min: 0,
        title: {
          text: 'รายการ'
        },
        stackLabels: {
          enabled: true,
          style: {
            fontWeight: 'bold',
            color: 'gray'
          }
        }
      },
      legend: {
        align: 'right',
        x: -30,
        verticalAlign: 'top',
        y: 25,
        floating: true,
        backgroundColor: 'white',
        borderColor: '#CCC',
        borderWidth: 1,
        shadow: false
      },
      plotOptions: {
        column: {
          stacking: 'normal',
          dataLabels: {
            enabled: true,
            color: 'white'
          }
        }
      },
      tooltip: {
        formatter: function () {
          return '<b>' + this.x + '</b><br/>' +
            this.series.name + ': ' + this.y + '<br/>' +
            'Total: ' + this.point.stackTotal;
        }
      },
      series: series,
      responsive: {
        rules: [{
          condition: {
            maxWidth: 400
          },
          chartOptions: {
            legend: {
              align: 'center',
              verticalAlign: 'bottom',
              layout: 'horizontal'
            },
            yAxis: {
              labels: {
                align: 'left',
                x: 0,
                y: -5
              },
              title: {
                text: null
              }
            },
            subtitle: {
              text: null
            },
            credits: {
              enabled: false
            }
          }
        }]
      }
    }
  }

  async getOFCClaimSummary() {
    try {
      const result: any = await this.dashboardService.getOFCClaimSummary();
      if (result.ok) {
        // const datas: any = _.unionBy([result.ipd, result.opd], 'date_serv');
        const _monthIpd = _.uniqBy(result.ipd, 'date_serv');
        const _monthOpd = _.uniqBy(result.opd, 'date_serv');
        const categoriesIpd = [];
        const categoriesOpd = [];
        const categoriesIpdTh = [];
        const categoriesOpdTh = [];

        _monthIpd.forEach(v => {
          categoriesIpd.push(v.date_serv);
          const thaiDate = `
          ${moment(v.date_serv, 'YYYY-MM').locale('th').format('MMM')} ${moment(v.date_serv, 'YYYY-MM').get('year') + 543}`
          categoriesIpdTh.push(thaiDate);
        });

        _monthOpd.forEach(v => {
          categoriesOpd.push(v.date_serv);
          const thaiDate = `
          ${moment(v.date_serv, 'YYYY-MM').locale('th').format('MMM')} ${moment(v.date_serv, 'YYYY-MM').get('year') + 543}`
          categoriesOpdTh.push(thaiDate);
        });

        const seriesOpd: any = [];
        const seriesIpd: any = [];

        const opdData = [];
        const ipdData = [];
        categoriesIpd.forEach(v => {
          const idxIpd = _.findIndex(result.ipd, { date_serv: v });
          if (idxIpd > -1) {
            ipdData.push(+result.ipd[idxIpd].total);
          } else {
            ipdData.push(0);
          }
        });
        categoriesOpd.forEach(v => {
          const idxOpd = _.findIndex(result.opd, { date_serv: v });

          if (idxOpd > -1) {
            opdData.push(+result.opd[idxOpd].total);
          } else {
            opdData.push(0);
          }
        });

        seriesIpd.push({ name: 'ค่ารักษา (บาท)', data: ipdData });
        seriesOpd.push({ name: 'ค่ารักษา (บาท)', data: opdData });

        // console.log(categories, series);
        this.setChartOFCIpd(categoriesIpdTh, seriesIpd);
        this.setChartOFCOpd(categoriesOpdTh, seriesOpd);
      } else {
        this.alertService.error(JSON.stringify(result.error));
      }
    } catch (error) {
      this.alertService.error(error.message);
    }
  }

  async getOFCIpdClaimStatusReport() {
    try {
      const result: any = await this.dashboardService.getOFCClaimStatusReport();
      if (result.ok) {
        const datasOpd: any = _.unionBy([result.opd.claim, result.opd.total], 'date_serv');
        // console.log(datasOpd);
        const _month = _.uniqBy(datasOpd, 'date_serv');
        const categories = [];
        const categoriesTh = [];
        _month[0].forEach(v => {
          categories.push(v.date_serv);
          const thaiDate = `
            ${moment(v.date_serv, 'YYYY-MM').locale('th').format('MMM')} ${moment(v.date_serv, 'YYYY-MM').get('year') + 543}
          `;
          categoriesTh.push(thaiDate);
        });

        console.log(categories);

        const series: any = [];
        const opdTotalData = [];
        const opdClaimData = [];
        const ipdTotalData = [];
        const ipdClaimData = [];

        categories.forEach(v => {
          const idxIpdTotal = _.findIndex(result.ipd.total, { date_serv: v });
          if (idxIpdTotal > -1) {
            ipdTotalData.push(+result.ipd.claim[idxIpdTotal].total);
          } else {
            ipdTotalData.push(0);
          }
          const idxIpdClaim = _.findIndex(result.ipd.claim, { date_serv: v });
          if (idxIpdClaim > -1) {
            ipdClaimData.push(+result.ipd.claim[idxIpdClaim].total);
          } else {
            ipdClaimData.push(0);
          }
        });

        series.push({ name: 'ส่งเคลมแล้ว', data: ipdClaimData, stack: 'IPD' });
        series.push({ name: 'ทั้งหมด', data: ipdTotalData, stack: 'IPD' });

        console.log(series);
        //   series.push({ name: 'OPD', data: opdData });
        this.setChartOFCIpdSendStatus(categoriesTh, series);
      } else {
        this.alertService.error(JSON.stringify(result.error));
      }
    } catch (error) {
      this.alertService.error(error.message);
    }
  }

  async getOFCOpdClaimStatusReport() {
    try {
      const result: any = await this.dashboardService.getOFCClaimStatusReport();
      if (result.ok) {
        const datasOpd: any = _.unionBy([result.opd.claim, result.opd.total], 'date_serv');
        // console.log(datasOpd);
        const _month = _.uniqBy(datasOpd, 'date_serv');
        const categories = [];
        const categoriesTh = [];
        _month[0].forEach(v => {
          categories.push(v.date_serv);
          const thaiDate = `
            ${moment(v.date_serv, 'YYYY-MM').locale('th').format('MMM')} ${moment(v.date_serv, 'YYYY-MM').get('year') + 543}
          `;
          categoriesTh.push(thaiDate);
        });

        const series: any = [];
        const opdTotalData = [];
        const opdClaimData = [];

        categories.forEach(v => {
          const idxOpdClaim = _.findIndex(result.opd.claim, { date_serv: v });
          if (idxOpdClaim > -1) {
            opdClaimData.push(+result.opd.claim[idxOpdClaim].total);
          } else {
            opdClaimData.push(0);
          }
          const idxOpdTotal = _.findIndex(result.opd.total, { date_serv: v });
          if (idxOpdTotal > -1) {
            opdTotalData.push(+result.opd.claim[idxOpdTotal].total);
          } else {
            opdTotalData.push(0);
          }
        });

        series.push({ name: 'ส่งเคลมแล้ว', data: opdClaimData, stack: 'OPD' });
        series.push({ name: 'ทั้งหมด', data: opdTotalData, stack: 'OPD' });

        // console.log(series);
        //   series.push({ name: 'OPD', data: opdData });
        this.setChartOFCOpdSendStatus(categoriesTh, series);
      } else {
        this.alertService.error(JSON.stringify(result.error));
      }
    } catch (error) {
      this.alertService.error(error.message);
    }
  }

  async getUCSClaimSummary() {
    try {
      const result: any = await this.dashboardService.getUCSClaimSummary();
      if (result.ok) {
        // const datas: any = _.unionBy([result.ipd, result.opd], 'date_serv');
        const _monthIpd = _.uniqBy(result.ipd, 'date_serv');
        const _monthOpd = _.uniqBy(result.opd, 'date_serv');
        const categoriesIpd = [];
        const categoriesOpd = [];
        const categoriesIpdTh = [];
        const categoriesOpdTh = [];

        _monthIpd.forEach(v => {
          categoriesIpd.push(v.date_serv);
          const thaiDate = `
          ${moment(v.date_serv, 'YYYY-MM').locale('th').format('MMM')} ${moment(v.date_serv, 'YYYY-MM').get('year') + 543}`
          categoriesIpdTh.push(thaiDate);
        });

        _monthOpd.forEach(v => {
          categoriesOpd.push(v.date_serv);
          const thaiDate = `
          ${moment(v.date_serv, 'YYYY-MM').locale('th').format('MMM')} ${moment(v.date_serv, 'YYYY-MM').get('year') + 543}`
          categoriesOpdTh.push(thaiDate);
        });

        const seriesOpd: any = [];
        const seriesIpd: any = [];

        const opdData = [];
        const ipdData = [];
        categoriesIpd.forEach(v => {
          const idxIpd = _.findIndex(result.ipd, { date_serv: v });
          if (idxIpd > -1) {
            ipdData.push(+result.ipd[idxIpd].total);
          } else {
            ipdData.push(0);
          }
        });
        categoriesOpd.forEach(v => {
          const idxOpd = _.findIndex(result.opd, { date_serv: v });

          if (idxOpd > -1) {
            opdData.push(+result.opd[idxOpd].total);
          } else {
            opdData.push(0);
          }
        });

        seriesIpd.push({ name: 'ค่ารักษา (บาท)', data: ipdData });
        seriesOpd.push({ name: 'ค่ารักษา (บาท)', data: opdData });

        // console.log(categories, series);
        this.setChartUCSIpd(categoriesIpdTh, seriesIpd);
        this.setChartUCSOpd(categoriesOpdTh, seriesOpd);
      } else {
        this.alertService.error(JSON.stringify(result.error));
      }
    } catch (error) {
      this.alertService.error(error.message);
    }
  }


  async getUCSIpdClaimStatusReport() {
    try {
      const result: any = await this.dashboardService.getUCSClaimStatusReport();
      if (result.ok) {
        const datasOpd: any = _.unionBy([result.opd.claim, result.opd.total], 'date_serv');
        // console.log(datasOpd);
        const _month = _.uniqBy(datasOpd, 'date_serv');
        const categories = [];
        const categoriesTh = [];
        _month[0].forEach(v => {
          categories.push(v.date_serv);
          const thaiDate = `
            ${moment(v.date_serv, 'YYYY-MM').locale('th').format('MMM')} ${moment(v.date_serv, 'YYYY-MM').get('year') + 543}
          `;
          categoriesTh.push(thaiDate);
        });

        console.log(categories);

        const series: any = [];
        const opdTotalData = [];
        const opdClaimData = [];
        const ipdTotalData = [];
        const ipdClaimData = [];

        categories.forEach(v => {
          const idxIpdTotal = _.findIndex(result.ipd.total, { date_serv: v });
          if (idxIpdTotal > -1) {
            ipdTotalData.push(+result.ipd.claim[idxIpdTotal].total);
          } else {
            ipdTotalData.push(0);
          }
          const idxIpdClaim = _.findIndex(result.ipd.claim, { date_serv: v });
          if (idxIpdClaim > -1) {
            ipdClaimData.push(+result.ipd.total[idxIpdClaim].total);
          } else {
            ipdClaimData.push(0);
          }
        });

        series.push({ name: 'ส่งเคลมแล้ว', data: ipdClaimData, stack: 'IPD' });
        series.push({ name: 'ทั้งหมด', data: ipdTotalData, stack: 'IPD' });

        //   series.push({ name: 'OPD', data: opdData });
        this.setChartUCSIpdSendStatus(categoriesTh, series);
      } else {
        this.alertService.error(JSON.stringify(result.error));
      }
    } catch (error) {
      this.alertService.error(error.message);
    }
  }

  async getUCSOpdClaimStatusReport() {
    try {
      const result: any = await this.dashboardService.getUCSClaimStatusReport();
      if (result.ok) {
        const datasOpd: any = _.unionBy([result.opd.claim, result.opd.total], 'date_serv');
        // console.log(datasOpd);
        const _month = _.uniqBy(datasOpd, 'date_serv');
        const categories = [];
        const categoriesTh = [];
        _month[0].forEach(v => {
          categories.push(v.date_serv);
          const thaiDate = `
            ${moment(v.date_serv, 'YYYY-MM').locale('th').format('MMM')} ${moment(v.date_serv, 'YYYY-MM').get('year') + 543}
          `;
          categoriesTh.push(thaiDate);
        });

        const series: any = [];
        const opdTotalData = [];
        const opdClaimData = [];

        categories.forEach(v => {
          const idxOpdClaim = _.findIndex(result.opd.claim, { date_serv: v });
          if (idxOpdClaim > -1) {
            opdClaimData.push(+result.opd.claim[idxOpdClaim].total);
          } else {
            opdClaimData.push(0);
          }
          const idxOpdTotal = _.findIndex(result.opd.total, { date_serv: v });
          if (idxOpdTotal > -1) {
            opdTotalData.push(+result.opd.total[idxOpdTotal].total);
          } else {
            opdTotalData.push(0);
          }
        });

        series.push({ name: 'ส่งเคลมแล้ว', data: opdClaimData, stack: 'OPD' });
        series.push({ name: 'ทั้งหมด', data: opdTotalData, stack: 'OPD' });

        this.setChartUCSOpdSendStatus(categoriesTh, series);
      } else {
        this.alertService.error(JSON.stringify(result.error));
      }
    } catch (error) {
      this.alertService.error(error.message);
    }
  }

}
