import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class YiqingformService {
  public yiqingFormUrl = 'http://localhost:8080/yiqing/yiQingForm';

  constructor(
    private http: HttpClient
  ) {
  }

  yiqingForm() {
    return new Promise((resolve, reject) => {
      this.http.get(this.yiqingFormUrl).toPromise().then(res => {
        resolve(res);
      }, error => {
        reject(error);
      });
    });
  }
}
