import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  public findAllUrl = 'http://localhost:8080/news/findAll';

  constructor(
    private http: HttpClient
  ) { }

  getNews() {
    return new Promise((resolve, reject) => {
      this.http.get(this.findAllUrl).toPromise().then(res => {
        resolve(res);
      }, error => {
        reject(error);
      });
    });
  }
}
