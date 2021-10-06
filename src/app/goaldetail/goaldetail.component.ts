import { Component,  OnInit ,Input , Output, EventEmitter} from '@angular/core';
import { Goal } from '../goal';


@Component({
  selector: 'app-goaldetail',
  templateUrl: './goaldetail.component.html',
  styleUrls: ['./goaldetail.component.css']
})
export class GoaldetailComponent implements OnInit {
  @Input() goal!: Goal;
  @Output () iscomplete=new EventEmitter<boolean>();

  goalDelete(complete:boolean){
    this.iscomplete.emit(complete)
  }

  constructor() { }

  ngOnInit(): void {
  }

}

// goalcomplete(complete:boolean)