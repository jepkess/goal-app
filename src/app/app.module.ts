import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClient, HttpClientModule } from '@angular/common/http';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoalComponent } from './goal/goal.component';
import { GoaldetailComponent } from './goaldetail/goaldetail.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { DateCountPipe } from './date-count.pipe';
import { GoalFormComponent } from './goal-form/goal-form.component';
import { GoalServiceService } from './goal-service.service';


@NgModule({
  declarations: [
    AppComponent,
    GoalComponent,
    GoaldetailComponent,
    StrikethroughDirective,
    DateCountPipe,
    GoalFormComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgProgressModule.forRoot(),
    NgProgressHttpClientModule
    
    

  ],
  providers: [],  //another way to register a provider using the app.module.ts [Goalserviceservice]
  bootstrap: [AppComponent]
})
export class AppModule { }
