import { EventEmitter, Injectable, Output } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PagesService {
  public state: 'closed' | 'opened' = 'closed'
  @Output() pageState = new EventEmitter<'closed' | 'opened'>();

  //emits an event when the page is opened or closed
  emitPageEvent(event: 'closed' | 'opened') {
    this.state = event
    this.pageState.emit(event);
  }
}
