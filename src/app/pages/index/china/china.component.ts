import {Component, OnInit} from '@angular/core';
import {ChinaService} from './service/china.service';

@Component({
  selector: 'app-china',
  templateUrl: './china.component.html',
  styleUrls: ['./china.component.less']
})
export class ChinaComponent implements OnInit {

  constructor(
    private chinaService: ChinaService
  ) {
  }

  total;
  dayAdd;

  ngOnInit() {
    this.getChinaYiQing();
  }

  getChinaYiQing() {
    this.chinaService.chinaYiQing().then(res => {
      this.total = res['data']['total'];
      this.dayAdd = res['data']['dayAdd'];
    });
  }
}
