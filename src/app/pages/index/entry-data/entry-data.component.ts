import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EntryDataService} from './service/entry-data.service';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  selector: 'app-entry-data',
  templateUrl: './entry-data.component.html',
  styleUrls: ['./entry-data.component.less']
})
export class EntryDataComponent implements OnInit {
  @Input() visible = false;
  @Output() result = new EventEmitter();
  selectedSheng;
  selectedShi;
  shi;
  yiqingEntry = {
    cId: '',
    cName: '',
    addDiagnosis: 0,
    cure: 0,
    die: 0,
    addSuspected: 0,
    reduceSuspected: 0,
    addICU: 0,
    reduceICU: 0
  };
  city;

  constructor(
    private entryDataService: EntryDataService,
    private message: NzMessageService
  ) {
  }


  ngOnInit() {
    this.getCity();
  }

  close() {
    this.selectedShi = null;
    this.selectedSheng = null;
    this.yiqingEntry = {
      cId: '',
      cName: '',
      addDiagnosis: 0,
      cure: 0,
      die: 0,
      addSuspected: 0,
      reduceSuspected: 0,
      addICU: 0,
      reduceICU: 0
    };
    this.result.emit(false);
  }

  getCity() {
    this.entryDataService.getCity().then(res => {
      this.city = res['data'];
    });
  }
  shengChange(data){
    this.selectedShi = null;
    this.selectedSheng = data;
    for (let i = 0; i< this.city.length;i++){
      if (this.selectedSheng == this.city[i].id){
        this.shi = this.city[i]['shi'];
        return;
      }
    }
  }
  shiChange(){
    this.yiqingEntry.cId = this.selectedShi.id;
    this.yiqingEntry.cName  = this.selectedShi.name;
  }

  save(){
    this.entryDataService.entryData(this.yiqingEntry).then(res=>{
      if (res['data']==true){
        this.message.success('添加成功');
        setTimeout(()=>{
          this.close();
        }, 200)
      }else{
        this.message.error('数据格式错误，或者您今天已经添加过这个市的资料');
      }
    })
  }
}
