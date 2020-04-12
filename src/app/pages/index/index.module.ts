import {NgModule} from '@angular/core';
import {Routes, RouterModule, RouteReuseStrategy} from '@angular/router';
import {IndexComponent} from './index.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {WelcomeComponent} from './welcome/welcome.component';
import {EntryDataComponent} from './entry-data/entry-data.component';
import {YiqinghistoryComponent} from './yiqinghistory/yiqinghistory.component';
import {ChinaComponent} from './china/china.component';
import {NewsComponent} from './news/news.component';
import { EchartsComponent } from './china/echarts/echarts.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';


const routes: Routes = [
  {
    path: '', component: IndexComponent, children: [
      {path: 'yiqinghistory', component: YiqinghistoryComponent},
      {path: 'welcome', component: WelcomeComponent},
      {path: 'chinayiqing', component: ChinaComponent},
      {path: 'news', component: NewsComponent},
      {path: 'chinaform', component: EchartsComponent}
    ]
  }
];

@NgModule({
  declarations: [
    IndexComponent,
    WelcomeComponent,
    EntryDataComponent,
    YiqinghistoryComponent,
    ChinaComponent,
    NewsComponent,
    EchartsComponent,

  ],
  imports: [
    RouterModule.forChild(routes),
    NgZorroAntdModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEchartsModule,
    NzDatePickerModule
  ],
  exports: [RouterModule],
  providers: []
})
export class IndexModule {
}
