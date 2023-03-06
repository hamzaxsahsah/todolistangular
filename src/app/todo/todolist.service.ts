import { Injectable } from '@angular/core';
import { todo } from './todo';
import { HttpClientModule , HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TodolistService {
  done : boolean = false;
  constructor(private http : HttpClient) { }
  getSomeData() {
    return this.http.get<todo[]>('https://jsonplaceholder.typicode.com/todos');
  }

}
