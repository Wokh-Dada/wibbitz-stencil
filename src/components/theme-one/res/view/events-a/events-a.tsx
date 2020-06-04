import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';

@Component({
  tag: 'events-a',
  styleUrl: 'events-a.css',
  shadow: false,
})
export class EventsA implements ComponentInterface {
  @Prop()events: any[];

  /**
   * клик по кнопке Read Report в компоненте newSinglePost
   * */
  @Event() clickReadReportOnNewSinglePost: EventEmitter;


  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="titles">
              Upcoming Events
            </div>
          </div>
          <div class="row">
            <div class="col-lg">
              <new-single-post
                newPost={this.events}
              />
           </div>
        </div>
      </div>
  </div>

  );
  }

}