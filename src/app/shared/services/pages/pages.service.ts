import { EventEmitter, Injectable, Output } from '@angular/core';
import { NzConfigService } from 'ng-zorro-antd/core/config';

@Injectable({
  providedIn: 'root'
})
export class PagesService {
  public state: 'closed' | 'opened' = 'closed';
  public color: string;
  @Output() pageEvent = new EventEmitter<PageEvent>();

  /**
   * Constructs a new instance of the class.
   *
   * @param {NzConfigService} nzConfigService - The NzConfigService instance.
   */
  constructor(private nzConfigService: NzConfigService) {
    this.color = '#000000';
  }

  /**
   * Emits an event when the page is opened or closed
   * @param event The event containing the page's state and color
   */
  async emitPageEvent(event: PageEvent) {
    // Update the service's state to match the event's state
    this.state = event.state;
    
    // Set the primary color of the theme to match the event's color
    this.nzConfigService.set('theme', {
      primaryColor: event.color
    });

    // Emit the event to any listeners
    this.pageEvent.emit(event);
  }

}

export interface PageEvent {
  state: 'closed' | 'opened';
  color: string;
}
