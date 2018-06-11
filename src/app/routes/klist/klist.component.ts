import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 'app-klist',
  templateUrl: './klist.component.html',
  styleUrls: ['./klist.component.css',
  '../routers.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class KibbleListComponent implements OnInit {
  q: any = {
    ps: 8,
    categories: [],
  };

  list: any[] = [];

  loading = true;

  // categorys
  categories = [
    { id: 0, text: '전체', value: false },
    { id: 1, text: '친구', value: false },
    { id: 2, text: '건강', value: false },
    { id: 3, text: '여유', value: false },
    { id: 4, text: '돈', value: false }
  ];

  changeCategory(status: boolean, idx: number) {
    if (idx === 0) {
      this.categories.map(i => (i.value = status));
    } else {
      this.categories[idx].value = status;
    }
    this.getData();
  }

  constructor(private http: _HttpClient, public msg: NzMessageService) {}

  ngOnInit() {
    this.getData();
  }

  getData(more = false) {
    this.loading = true;
    this.http.get('/api/list', { count: this.q.ps }).subscribe((res: any) => {
      this.list = more ? this.list.concat(res) : res;
      this.loading = false;
    });
  }
}
