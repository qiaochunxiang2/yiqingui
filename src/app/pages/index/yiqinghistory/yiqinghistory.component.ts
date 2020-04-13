import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {YiqinghistoryService} from './service/yiqinghistory.service';
import {EntryDataService} from '../entry-data/service/entry-data.service';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  selector: 'app-yiqinghistory',
  templateUrl: './yiqinghistory.component.html',
  styleUrls: ['./yiqinghistory.component.less']
})
export class YiqinghistoryComponent implements OnInit {

  entryDataVisible = false;
  loading = false;
  selectedTime;
  listData: unknown = [];

  citys;
  queryData = {
    cId: null,
    entryDate: 0
  };
  constructor(
    private historyService: YiqinghistoryService,
    private entryDataService: EntryDataService,
    private message: NzMessageService,
  ) {
  }


  ngOnInit() {
    this.getCity();
    this.findAll();
  }


  openEntryData() {
    this.entryDataVisible = true;
  }

  closeEntry() {
    this.entryDataVisible = false;
    this.findAll();
  }

  findAll() {
    this.historyService.findAll().then(res => {
      this.listData = res['data'];
    });
  }

  getCity(){
    this.entryDataService.getCity().then(res=>{
      this.citys = res['data'];
    })
  }
  dateChange(){
    let date = new Date(this.selectedTime);
    this.queryData.entryDate = date.getTime();
  }
  query(){
    this.loading = true;
    this.listData = [];
    this.historyService.queryFilter(this.queryData).then(res=>{
      if (res['data']){
        this.listData = res['data'];
        this.loading = false;
      } else{
        this.message.error('服务器错误');
        this.loading = true;
      }
    })
  }

}
