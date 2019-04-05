import { Injectable } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';
import { Subject } from 'rxjs';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {
  private connection: HubConnection;
  itemUpdated: Subject<Todo> = new Subject<Todo>();
  itemAdded: Subject<Todo> = new Subject<Todo>();

  constructor() {
    this.connection = new HubConnectionBuilder()
      .withUrl('http://localhost:5000/todohub')
      .build();
    this.registerOnEvents();
    this.connection.start().catch(err => console.log(err.toString()));
  }

  registerOnEvents() {
    this.connection.on('itemAdded', item => {
      console.log('itemAdded');
      this.itemAdded.next(item);
    });

    this.connection.on('itemUpdated', item => {
      console.log('itemUpdated');
      this.itemUpdated.next(item);
    });
  }
}
