import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[];
  constructor() {
    this.todos=[
     {
      sno:1,
      title:"dsa q1",
      desc: "description",
      active: true
     },
     {
      sno:2,
      title:"1/100 python",
      desc: "description",
      active: true
     },
     {
      sno:3,
      title:"learn angular",
      desc: "description",
      active: true
     }
    ]
   }

  ngOnInit(): void {
  }

}
