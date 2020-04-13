import {Component, OnInit} from '@angular/core';
import {YiqingformService} from './service/yiqingform.service';

export interface CityYiQing {
  id: string;
  name: string;
  dayAdd?: number;
  diagnosis?: number,
  cure?: number,
  die?: number,
  children?: CityYiQing[];
  expand?: boolean;
  parent?: CityYiQing;
}

@Component({
  selector: 'app-yiqingform',
  templateUrl: './yiqingform.component.html',
  styleUrls: ['./yiqingform.component.less']
})
export class YiqingformComponent implements OnInit {
  yiqingFormData: CityYiQing[] = [];
  mapOfExpandedData: { [key: string]: CityYiQing[] } = {};

  collapse(array: CityYiQing[], data: CityYiQing, $event: boolean): void {
    if ($event === false) {
      if (data.children) {
        data.children.forEach(d => {
          const target = array.find(a => a.id === d.id)!;
          target.expand = false;
          this.collapse(array, target, false);
        });
      } else {
        return;
      }
    }
  }

  convertTreeToList(root: CityYiQing): CityYiQing[] {
    const stack: CityYiQing[] = [];
    const array: CityYiQing[] = [];
    const hashMap = {};
    stack.push({...root, expand: false});
    while (stack.length !== 0) {
      const node = stack.pop()!;
      this.visitNode(node, hashMap, array);
      if (node.children) {
        for (let i = node.children.length - 1; i >= 0; i--) {
          stack.push({...node.children[i], expand: false, parent: node});
        }
      }
    }
    return array;
  }

  visitNode(node: CityYiQing, hashMap: { [key: string]: boolean }, array: CityYiQing[]): void {
    if (!hashMap[node.id]) {
      hashMap[node.id] = true;
      array.push(node);
    }
  }

  constructor(
    private yiqingformService: YiqingformService,
  ) {
  }

  ngOnInit(): void {
    this.yiqinngForm();
  }

  yiqinngForm() {
    this.yiqingformService.yiqingForm().then(res => {
      this.yiqingFormData = res['data'];
      console.log(this.yiqingFormData);
      this.yiqingFormData.forEach(item => {
        this.mapOfExpandedData[item.id] = this.convertTreeToList(item);
      });
    });
  }
}
