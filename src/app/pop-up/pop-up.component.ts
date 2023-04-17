import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { DataService } from '../data.service';
import { BuilderComponent } from '../builder/builder.component';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css'],
})
export class PopUpComponent {
  text: string = '';
  questionType: string = '';
  isrequired: boolean = false;
  fourth: boolean = false;
  checkQ = {
    Question: '',
    Option1: '',
    Option2: '',
    Option3: '',
    Option4: '',
    Option5: '',
  };

  constructor(
    private router: Router,
    private Mat: MatDialog,
    private dservice: DataService
  ) {}

  onSubmit(abc: any) {
    this.dservice.globalQuestions({
      validations: this.isrequired,
      type: 'textarea',
      Question: this.text,
      Option1: null,
      Option2: null,
      Option3: null,
      Option4: null,
      Option5: null,
    });

    console.log(this.text);

    Swal.fire({
      title: 'Would you like to add and other Question?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
      confirmButtonColor: '#FFA500',
      iconColor: '#FFA500',
    }).then((value) => {
      if (value.isConfirmed) {
        this.text = '';
        Swal.fire({
          icon: 'success',
          iconColor: '#FFA500',
          showConfirmButton: false,
          title: 'Previous Question Saved!!',
          timer: 1500,
        });
      } else {
        this.router.navigate(['form/builder']);
        this.Mat.closeAll();
      }
    });
  }

  onCheckSubmit(ccc: any) {
    Swal.fire({
      title: 'Would you like to add and other Question?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
      confirmButtonColor: '#FFA500',
      iconColor: '#FFA500',
    }).then((value) => {
      if (value.isConfirmed) {
        this.dservice.globalQuestions({
          type: 'checkbox',
          Question: this.checkQ.Question,
          Option1: this.checkQ.Option1,
          Option2: this.checkQ.Option2,
          Option3: this.checkQ.Option3,
          Option4: this.checkQ.Option4,
          Option5: this.fourth,
        });

        this.checkQ.Question = '';
        this.checkQ.Option1 = '';
        this.checkQ.Option2 = '';
        this.checkQ.Option3 = '';
        this.checkQ.Option4 = '';
        this.checkQ.Option5 = '';

        //console.log(this.dservice.getGlobalQuestions());

        Swal.fire({
          icon: 'success',
          iconColor: '#FFA500',
          showConfirmButton: false,
          title: 'Previous Question Saved!!',
          timer: 1500,
        });
      } else {
        this.dservice.globalQuestions({
          type: 'checkbox',
          Question: this.checkQ.Question,
          Option1: this.checkQ.Option1,
          Option2: this.checkQ.Option2,
          Option3: this.checkQ.Option3,
          Option4: this.checkQ.Option4,
          Option5: this.fourth,
        });
        this.router.navigate(['form/builder']);
        this.Mat.closeAll();
        this.Mat.open(BuilderComponent);
      }
    });
  }
}
