import {Component, OnInit} from '@angular/core';
import {NewsService} from './service/news.service';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.less']
})
export class NewsComponent implements OnInit {
  allNews;

  constructor(
    private newsService: NewsService,
    private message: NzMessageService
  ) {
  }

  ngOnInit() {
    this.getAllNews();
  }

// 获取所有新闻
  getAllNews() {
    this.newsService.getNews().then(res => {
      if (res['data']) {
        this.allNews = res['data'];
      } else {
        this.message.error('服务器错误');
      }
    });
  }

  changeUrl(url) {
    window.open(url, '_self');
  }
}
