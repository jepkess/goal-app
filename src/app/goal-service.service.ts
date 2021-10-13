import { Injectable } from '@angular/core';
import { Goals } from './goalList';
//registering provider//using injectable decorator)
@Injectable({
  providedIn: 'root'
})
export class GoalServiceService {
  getGoal(){
    return Goals
  }

  constructor() { }
}
