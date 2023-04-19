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

  index: number=0;
  answerText: string[]= []
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
    private toastr :ToastrService
  ) {}

  ngOnInit(): void {
    this.viewQuestions = this.dservice.getGlobalQuestions();
    this.toastr.success('Welcome to Builder Component', 'from/builder',{
      timeOut:2000,
      progressBar:true,
      progressAnimation:'increasing',
    });
  }

  // abc(formdata:NgForm){
  //   console.log(formdata)
  //   while(this.index===this.dservice.getGlobalQuestions().length){
  //     this.answerOption= {
  //       Answer: formdata.form.value['taAnswer0'],
  //       Option1: false,
  //       Option2: false,
  //       Option3: false,
  //       Option4: false,
  //       Option5: null,
  //     };
  //     this.index++ 
  //   }  
  //   console.log(this.dservice.getGlobalQuestions().length)
  //   console.log(this.answerOption)  
  //   // this.index++
  //   // console.log(this.answerOption)  
  // }


  answerPage() {
    this.router.navigate(['form/answers']);
    this.Mat.closeAll();
  }

  onSubmit(form:NgForm){
console.log(form)
  }

  onSubmitTextAnswer() {
    this.dservice.globalAnswers({
      type: 'textarea',
      Answer: this.answerText[this.index],
      Option1: null,
      Option2: null,
      Option3: null,
      Option4: null,
      Option5: null,
    });
    this.index++;

    console.log(this.dservice.getglobalAnswers());
  }

  onSubmitcheckAnswer() {
    this.dservice.globalAnswers({
      type: 'checkbox',
      Answer: null,
      Option1: this.answerOption.Option1,
      Option2: this.answerOption.Option2,
      Option3: this.answerOption.Option3,
      Option4: this.answerOption.Option4,
      Option5: this.answerOption.Option5,
    });

    console.log(this.dservice.getglobalAnswers());
    console.log(this.dservice.getGlobalQuestions());
  }
}
