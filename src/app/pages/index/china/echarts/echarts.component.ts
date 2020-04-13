import {Component, OnInit} from '@angular/core';
import {ChinaService} from '../service/china.service';

@Component({
  selector: 'app-echarts',
  templateUrl: './echarts.component.html',
  styleUrls: ['./echarts.component.less']
})
export class EchartsComponent implements OnInit {
  areaOptions: any;
  date = [];  //日期
  add = [];  // 新增确诊人数
  cure = []; // 治愈人数
  die = [];  // 死亡人数
  suspected = []; // 疑似人数
  ICU = []; // 重症人数

  constructor(
    private chinaService: ChinaService,
  ) {
  }

  ngOnInit() {
    this.chinaEcharts();
  }

  initAreaChart() {
    this.areaOptions = {
      title: {
        text: ''
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['新增', '治愈', '死亡']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: this.date
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '新增',
          type: 'line',
          data: this.add
        },
        {
          name: '治愈',
          type: 'line',
          data: this.cure
        },
        {
          name: '死亡',
          type: 'line',
          data: this.die
        },
      ]
    };
  }

  chinaEcharts() {
    this.chinaService.chinaEcharts().then(res => {
      let datas = res['data'];
      if (datas) {
        for (let i = 0; i < datas.length; i++) {
          let data = datas[i];
          let da = new Date(data['entryDate']);
          this.date.push(da.getFullYear() + '-' + (da.getMonth()+1) +'-'+ da.getDate());
          this.add.push(data['diagnosis']);
          this.cure.push(data['cure']);
          this.die.push(data['die']);
          this.ICU.push(data['addICU']);
          this.suspected.push(data['addSuspected'])
          this.initAreaChart();
        }
      }
    });
  }
}
