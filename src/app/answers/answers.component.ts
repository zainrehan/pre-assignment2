import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

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
    private Mat: MatDialog,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.viewAnswer = this.dservice.getglobalAnswers();
    this.viewQuestion = this.dservice.getGlobalQuestions();
    this.toastr.success('Welcome to Answer Component', 'from/answers',{
      timeOut:2000,
      progressBar:true,
      progressAnimation:'increasing',
    });
  }
  back() {
    this.Router.navigate(['form/builder']);
    this.Mat.closeAll();
  }
}
