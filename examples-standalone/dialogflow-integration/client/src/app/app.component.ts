import { Component } from '@angular/core';
import { Message, SendMessageEvent, User } from '@progress/kendo-angular-conversational-ui';
import { merge, Observable, Subject } from 'rxjs';
import { scan } from 'rxjs/operators';
import { Agent } from './agent';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public feed: Observable<Message[]>;

  public readonly user: User = {
    id: 1
  };

  public readonly bot: User = {
    id: 0,
    name: 'Bobby McBot',
    avatarUrl: 'https://demos.telerik.com/kendo-ui/content/chat/avatar.png'
  };

  private agent: Agent = new Agent(this.bot, this.http);
  private local: Subject<Message> = new Subject<Message>();

  constructor(private http: HttpClient) {
    // Merge local and remote messages into a single stream
    this.feed = merge(
      this.local,
      this.agent.responses
    ).pipe(
      // ... and emit an array of all messages
      scan((acc: Message[], x: Message) => [...acc, x], [])
    );
  }

  public sendMessage(e: SendMessageEvent): void {
    this.send(e.message);
  }

  public heroAction(button: any) {
    if (button.type === 'postBack') {
      const message = {
        author: this.user,
        text: button.value
      };

      this.send(message);
    }
  }

  private send(message: Message) {
    this.local.next(message);
    this.local.next({
      author: this.bot,
      typing: true
    });
    this.agent.submit(message.text);
  }
}
