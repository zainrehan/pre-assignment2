import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  dataList: any[] = [];
  answerList: any[] = [];

  constructor() {}

  globalQuestions(data: Object) {
    this.dataList.push(data);
    console.log(this.dataList);
  }

  getGlobalQuestions() {
    return this.dataList;
  }

  globalAnswers(ans: Object) {
    this.answerList.push(ans);
  }

  getglobalAnswers() {
    return this.answerList;
  }
}
