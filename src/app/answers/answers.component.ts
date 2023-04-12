import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css'],
})
export class AnswersComponent implements OnInit {
  viewAnswer: any[] = [];
  viewQuestion: any[] = [];

  constructor(
    private dservice: DataService,
    private Router: Router,
    private Mat: MatDialog
  ) {}

  ngOnInit(): void {
    this.viewAnswer = this.dservice.getglobalAnswers();
    this.viewQuestion = this.dservice.getGlobalQuestions();
  }
  back() {
    this.Router.navigate(['form/builder']);
    this.Mat.closeAll();
  }
}
