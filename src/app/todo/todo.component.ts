import { Component } from '@angular/core';
import { todo } from './todo';
import { TodolistService } from './todolist.service';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
    public data:todo[] = [];
    public filtred:todo[]=[];
    done : boolean = false;
    constructor(private todo:TodolistService){

    }
    ngOnInit(){
      this.todo.getSomeData().subscribe(data =>{
        this.data=data;
        this.filtred=this.data

      });
    }
    filter():void{
      this.done=!this.done;
      this.filtred.filter(todo => todo.completed === true);
  
    }
    
}