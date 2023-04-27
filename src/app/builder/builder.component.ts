import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css'],
})
export class BuilderComponent implements OnInit {
  index: number = 0;
  answerText: string[] = [];
  viewQuestions: any[] = [];
  answerOption = {
    Answer: null,
    Option1: false,
    Option2: false,
    Option3: false,
    Option4: false,
    Option5: null,
  };
  nature: boolean = false;

  constructor(
    private dservice: DataService,
    private router: Router,
    private Mat: MatDialog,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.viewQuestions = this.dservice.getGlobalQuestions();
    this.toastr.success('Welcome to Builder Component', 'from/builder', {
      timeOut: 2000,
      progressBar: true,
      progressAnimation: 'increasing',
    });
  }

  abc(data: NgForm) {
    for (let i = 0; i < this.dservice.getGlobalQuestions().length; i++) {
      if (this.viewQuestions[this.index].type === 'textarea') {
        this.dservice.globalAnswers({
          type: 'textarea',
          Answer: data.value[`taAnswer${this.index}`],
          Option1: null,
          Option2: null,
          Option3: null,
          Option4: null,
          Option5: null,
        });
      }
      if (this.viewQuestions[this.index].type === 'checkbox') {
        this.dservice.globalAnswers({
          type: 'checkbox',
          Answer: null,
          Option1: data.value[`opt1${this.index}`],
          Option2: data.value[`opt2${this.index}`],
          Option3: data.value[`opt3${this.index}`],
          Option4: data.value[`opt4${this.index}`],
          Option5: data.value[`catext${this.index}`],
        });
      }
      this.index++;
    }
    this.router.navigate(['form/answers']);
    this.Mat.closeAll();
  }

  answerPage() {
    this.router.navigate(['form/answers']);
    this.Mat.closeAll();
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }

  //   onSubmitTextAnswer() {
  //     this.dservice.globalAnswers({
  //       type: 'textarea',
  //       Answer: this.answerText[this.index],
  //       Option1: null,
  //       Option2: null,
  //       Option3: null,
  //       Option4: null,
  //       Option5: null,
  //     });
  //     this.index++;

  //     console.log(this.dservice.getglobalAnswers());
  //   }

  //   onSubmitcheckAnswer() {
  //     this.dservice.globalAnswers({
  //       type: 'checkbox',
  //       Answer: null,
  //       Option1: this.answerOption.Option1,
  //       Option2: this.answerOption.Option2,
  //       Option3: this.answerOption.Option3,
  //       Option4: this.answerOption.Option4,
  //       Option5: this.answerOption.Option5,
  //     });

  //     console.log(this.dservice.getglobalAnswers());
  //     console.log(this.dservice.getGlobalQuestions());
  //   }
}
