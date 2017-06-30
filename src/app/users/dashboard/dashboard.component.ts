import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'sc-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  options;
  data;
  options2;
  data2;
  options3;
  data3;

  options4;
  data4;

  constructor() { }
  ngOnInit() {
    this.options4 = {
      chart: {
        type: 'multiBarChart',
        height: 450,
        margin: {
          top: 20,
          right: 20,
          bottom: 45,
          left: 45
        },
        clipEdge: true,
        duration: 500,
        stacked: true,
        xAxis: {
          axisLabel: 'Time (ms)',
          showMaxMin: false
        },
        yAxis: {
          axisLabel: 'Y Axis',
          axisLabelDistance: -20
        }
      }
    }

    this.data4 = [{
      key: 'Sent',
      values: [{ x: 'ม.ค.', y: 43 }, { x: 'ก.พ.', y: 43 }, { x: 'มี.ค.', y: 55 }, { x: 'เม.ย', y: 32 }]
    },
    {
      key: 'Received',
      values: [{ x: 'ม.ค.', y: 43 }, { x: 'ก.พ.', y: 44 }, { x: 'มี.ค.', y: 32 }, { x: 'เม.ย', y: 33 }]
    },
    {
      key: 'Spam',
      values: [{ x: 'ม.ค.', y: 45 }, { x: 'ก.พ.', y: 64 }, { x: 'มี.ค.', y: 32 }, { x: 'เม.ย', y: 54 }]
    }
    ];

    this.options = {
      chart: {
        type: 'pieChart',
        height: 350,
        width: 450,
        x: function (d) { return d.key; },
        y: function (d) { return d.y; },
        showLabels: false,
        duration: 500,
        labelThreshold: 0.01,
        labelSunbeamLayout: true,
        legend: {
          margin: {
            top: 5,
            right: 35,
            bottom: 5,
            left: 0
          }
        }
      },
      title: {
        enable: true,
        text: 'ยอดขอเบิก'
      }
    }
    this.options2 = {
      chart: {
        type: 'discreteBarChart',
        height: 350,
        width: 450,
        margin: {
          top: 20,
          right: 20,
          bottom: 50,
          left: 55
        },
        x: function (d) { return d.label; },
        y: function (d) { return d.value + (1e-10); },
        showValues: true,
        valueFormat: function (d) {
          return d3.format(',.2f')(d);
        },
        duration: 500,
        xAxis: {
          axisLabel: 'เดือนที่ส่งเบิก'
        },
        yAxis: {
          axisLabel: 'บาท',
          axisLabelDistance: -10
        }
      },
      title: {
        enable: true,
        text: 'ยอดขอเบิก'
      }
    }

    this.data = [
      {
        key: "ยอดเบิกผู้ป่วย UCS+WEL",
        y: 150000
      },
      {
        key: "ยอดเบิกผู้ป่วย OFC",
        y: 250000
      },
      {
        key: "ยอดเบิกผู้ป่วย SSS",
        y: 19800
      }
    ];


    this.data2 = [
      {
        key: "ยอดขอเบิก (บาท)",
        values: [
          {
            "label": "ม.ค",
            "value": 235600
          },
          {
            "label": "ก.พ.",
            "value": 456000
          },
          {
            "label": "มี.ค.",
            "value": 560000
          },
          {
            "label": "เม.ย.",
            "value": 789000
          },
          {
            "label": "พ.ค.",
            "value": 650000
          },
          {
            "label": "มิ.ย.",
            "value": 789000
          },
          {
            "label": "ก.ค.",
            "value": 890000
          }
        ]
      }
    ]

    this.options3 = {
      chart: {
        type: 'lineChart',
        height: 350,
        margin: {
          top: 20,
          right: 20,
          bottom: 40,
          left: 55
        },
        x: function (d) { return d.x; },
        y: function (d) { return d.y; },
        useInteractiveGuideline: true,
        dispatch: {
          stateChange: function (e) { console.log("stateChange"); },
          changeState: function (e) { console.log("changeState"); },
          tooltipShow: function (e) { console.log("tooltipShow"); },
          tooltipHide: function (e) { console.log("tooltipHide"); }
        },
        xAxis: {
          axisLabel: 'Time (ms)'
        },
        yAxis: {
          axisLabel: 'Voltage (v)',
          tickFormat: function (d) {
            return d3.format('.02f')(d);
          },
          axisLabelDistance: -10
        },
        callback: function (chart) {
          console.log("!!! lineChart callback !!!");
        }
      }
    }

  }


}
