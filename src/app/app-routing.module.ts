import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BuilderComponent } from './builder/builder.component';
import { AnswersComponent } from './answers/answers.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'form/answers', component: AnswersComponent },
  { path: 'form/builder', component: BuilderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
