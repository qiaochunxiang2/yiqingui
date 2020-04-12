import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class YiqinghistoryService {
  public findAllUrl = 'http://localhost:8080/yiqing/findAll';
  constructor(
    private http: HttpClient,
  ) { }

  findAll(){
    return new Promise((resolve, reject) => {
      this.http.get(this.findAllUrl).toPromise().then(res => {
        resolve(res);
      }, error => {
        reject(error);
      });
    });
  }
}
