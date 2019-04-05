import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Todo } from './models/todo.model';
import { SignalRService } from './services/signalr.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  items: Todo[];
  form: FormGroup;

  constructor(
    private readonly signalrService: SignalRService,
    private readonly http: HttpClient
  ) {
    signalrService.itemAdded.subscribe(item => {
      this.items = [item, ...this.items];
    });
    signalrService.itemUpdated.subscribe(item => {
      this.items = this.items.filter(x => x.id !== item.id);
      this.items = [item, ...this.items];
    });
  }

  ngOnInit() {
    this.http
      .get<Todo[]>('http://localhost:5000/api/todos/')
      .subscribe(items => {
        this.items = items;
      });

    this.form = new FormGroup({
      todoValue: new FormControl('', Validators.required)
    });
  }

  addTodo() {
    const toSend = { value: this.form.value.todoValue };

    this.http
      .post('http://localhost:5000/api/todos/', toSend)
      .subscribe(() => console.log('added'));

    this.form.reset();
  }

  markAsDone(item: Todo) {
    item.done = true;
    this.http
      .put('http://localhost:5000/api/todos/' + item.id, item)
      .subscribe(() => console.log('updated'));
  }
}
