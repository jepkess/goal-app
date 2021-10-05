import { Component,  OnInit ,Input} from '@angular/core';
import { Goal } from '../goal';


@Component({
  selector: 'app-goaldetail',
  templateUrl: './goaldetail.component.html',
  styleUrls: ['./goaldetail.component.css']
})
export class GoaldetailComponent implements OnInit {
  @Input() goal!: Goal;

  constructor() { }

  ngOnInit(): void {
  }

}
