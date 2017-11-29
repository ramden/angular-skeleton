import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AlertService} from './alert.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [
    AlertService
  ]
})
export class SharedModule { }
