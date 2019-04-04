import { WebSocketService } from './websocket.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public chartValues = [];
  public messages = [];
  public min: Date = new Date();
  public max: Date = new Date(this.min.getTime() + 20000);
  private url = 'ws://localhost:8088';

  constructor(private wsService: WebSocketService) {
    wsService.createObservableSocket(this.url)
      .subscribe(m => {
        const item: any = JSON.parse(m);
        item.time = new Date(item.time);
        if (item.value) {
          this.chartValues = [...this.chartValues, item];
          if (this.chartValues.length > 20) {
            this.min = this.chartValues[this.chartValues.length - 20].time;
            this.max = item.time;
          }

          // prevent running out-of-memory when client is connected for too long
          if (this.chartValues.length > 500) {
            this.chartValues = this.chartValues.slice(480);
          }
        } else {
          if (this.messages.length > 100) {
            this.messages = this.messages.slice(80);
          }

          this.messages = [...this.messages, item];
        }
      });
  }

  public sendMessage(message: string): void {
    this.wsService.sendMessage(message);
  }
}
