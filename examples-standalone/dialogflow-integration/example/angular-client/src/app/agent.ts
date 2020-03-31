import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { guid } from '@progress/kendo-angular-common';

import { Observable, Subject, from, Subscription } from 'rxjs';

import { Message, User } from '@progress/kendo-angular-conversational-ui';
import { take } from 'rxjs/operators';

// See
// https://dialogflow.com/docs/reference/agent/message-objects
const enum MessageType {
  PlainText = 0,
  QuickReply = 2
}

const mapActions = (data: any) => (data || []).map(action => {
  if (action.type === 'postBack') {
    action.type = 'reply';
  }

  return action;
});

const mapReplies = (msg: any) => (msg.replies || []).map(reply =>
  ({ type: 'reply', value: reply })
);

const SERVER_URL = 'http://localhost:3140';

export class Agent {
  public readonly responses: Subject<Message> = new Subject<Message>();

  constructor(private user: User, private http: HttpClient) {
    this.eventRequest('Welcome')
      .pipe(take(1))
      .subscribe(data => this.onResponse(data));
  }

  public submit(question: string): void {
    this.textRequest(question)
      .pipe(take(1))
      .subscribe(data => this.onResponse(data));
  }

  private eventRequest(eventName: string): Observable<any> {
    return this.http.post(
      `${SERVER_URL}/sessions/event`,
      eventName,
      { withCredentials: true }
    );
  }

  private textRequest(text: string): Observable<any> {
    return this.http.post(
      `${SERVER_URL}/sessions/text`,
      text,
      { withCredentials: true }
    );
  }

  private onResponse(response: any): void {
    const timestamp = new Date();
    let messages: Message[] = [{
      author: this.user,
      timestamp
    }];

    if (response.messages.length > 0) {
      // Extract plain text messages
      messages = response.messages
        .filter(msg => msg.message === 'text')
        .map(msg => (
          {
            author: this.user,
            text: msg.text.text.join(),
            timestamp
          }
      ));
    }

    const lastMessage = messages[messages.length - 1];
    const suggestedActions = [];

    // Extract quick replies which are a type of message in DialogFlow V1 API
    response.messages
      .filter(msg => msg.type === MessageType.QuickReply)
      .forEach(msg =>
        suggestedActions.push(...mapReplies(msg))
      );

    // Our webhook sends attachments and quick replies in "data".
    if (response.data) {
      lastMessage.attachments = response.data.attachments;
      suggestedActions.push(...mapActions(response.data.suggestedActions));
    }

    lastMessage.suggestedActions = suggestedActions;

    messages.forEach(msg => this.responses.next(msg));
  }
}

