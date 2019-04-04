import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class WebSocketService {
  public ws: WebSocket;

  public createObservableSocket(url: string): Observable<string> {
    this.ws = new WebSocket(url);

    return Observable.create(observer => {
      this.ws.onmessage = event => observer.next(event.data);
      this.ws.onerror = event => observer.error(event);
      this.ws.onclose = event => observer.complete();
    });
  }

  public sendMessage(message: any): void {
    this.ws.send(message);
  }
}
