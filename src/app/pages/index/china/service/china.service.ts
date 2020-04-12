import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChinaService {
  public chinaUrl = 'http://localhost:8080/china/chinayiqing';
  public chinaEchartsUrl = 'http://localhost:8080/china/chinaEcharts';
  constructor(
    private http: HttpClient
  ) {
  }

  chinaYiQing() {
    return new Promise((resolve, reject) => {
      this.http.get(this.chinaUrl).toPromise().then(res => {
        resolve(res);
      }, error => {
        reject(error);
      });
    });
  }

  chinaEcharts() {
    return new Promise((resolve, reject) => {
      this.http.get(this.chinaEchartsUrl).toPromise().then(res => {
        resolve(res);
      }, error => {
        reject(error);
      });
    });
  }
}
