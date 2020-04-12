import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EntryDataService {
  public entryDataUrl = 'http://localhost:8080/yiqing/addData';
  public getCityUrl = 'http://localhost:8080/city/findAll';

  constructor(
    private http: HttpClient
  ) {
  }

  entryData(data) {
    data = JSON.parse(JSON.stringify(data));
    return new Promise((resolve, reject) => {
      this.http.post(this.entryDataUrl, data).toPromise().then(res => {
        resolve(res);
      }, error => {
        reject(error);
      });
    });
  }

  getCity() {
    return new Promise((resolve, reject) => {
      this.http.get(this.getCityUrl).toPromise().then(res => {
        resolve(res);
      }, error => {
        reject(error);
      });
    });
  }
}
