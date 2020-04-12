import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {YiqinghistoryService} from './service/yiqinghistory.service';
import {EntryDataService} from '../entry-data/service/entry-data.service';

@Component({
  selector: 'app-yiqinghistory',
  templateUrl: './yiqinghistory.component.html',
  styleUrls: ['./yiqinghistory.component.less']
})
export class YiqinghistoryComponent implements OnInit {

  entryDataVisible = false;
  loading = false;

  listData: unknown = [];

  citys;
  queryData = {
    cId: null,
    date: null
  }
  constructor(
    private historyService: YiqinghistoryService,
    private entryDataService: EntryDataService,
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
      console.log(res);
      this.listData = res['data'];
    });
  }

  getCity(){
    this.entryDataService.getCity().then(res=>{
      this.citys = res['data'];
    })
  }
}
