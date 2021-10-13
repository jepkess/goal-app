import { Component, OnInit } from '@angular/core';
import { GoalServiceService } from '../goal-service.service';  //importing the goalserviceservice
import { Goal } from '../goal'
import { AlertService } from '../alert.service'; //importing the alertService
import { Quote } from '../quote';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css'],
  providers: [GoalServiceService]   //register a provider service in goal.component.ts
})
export class GoalComponent implements OnInit {
  goals: Goal[];
  alertService: AlertService; //creating a property alertService of type AlertService
  quote: Quote;

  constructor(goalService: GoalServiceService, alertService: AlertService, private http: HttpClient) {
    //passing parameters
    this.goals = goalService.getGoal();
    this.alertService = alertService;
  }
  ngOnInit() {
    interface ApiResponse {
      author: string;
      quote: string;
    }
    this.http.get<ApiResponse>("http://quotes.stormconsultancy.co.uk/random.json").subscribe(data => {
      //successful API request
      this.quote = new Quote(data.author, data.quote)
    }, error => {
      this.quote = new Quote("Winson churchill", "Never never give up ")
      console.log("An error occured")
    })
  }



    addNewGoal(goal: any) {
      let goalLength = this.goals.length;
      goal.id = goalLength + 1;
      goal.completeDate = new Date(goal.completeDate)
      this.goals.push(goal)
    }
    toggleDetails(index: any) {
      this.goals[index].showdescription = !this.goals[index].showdescription;
      // } completeGoal(isComplete: any, index: any) {
      //   if (isComplete) {
      //     this.goals.splice(index, 1);
      //   }
    }
    deleteGoal(isComplete: any, index: any) {
      if (isComplete) {
        let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)
        if (toDelete) {
          this.goals.splice(index, 1)
          this.alertService.alertMe("The goal has been deleted")
        }
      }
    }
  }