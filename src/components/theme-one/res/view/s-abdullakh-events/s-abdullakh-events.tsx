import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';

@Component({
  tag: 's-abdullakh-events',
  styleUrl: 's-abdullakh-events.css',
  shadow: false,
})
export class SAbdullakhEvents implements ComponentInterface {

  /**
   * массив компоненту Events
   * */
  @Prop() events: any[];

  /**
   * заголовок компонента Events
   * */
  @Prop() eventsTitle: string;

  /**
   * клик по кнопке Read Report в компоненте newSinglePost
   * */
  @Event() clickOnEvents: EventEmitter;

  /**
   * клик по в компоненте SAbdullakhNewSinglePost
   * */
  @Event() clickOnNewSinglePost: EventEmitter;

  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="titles eventTitle" onClick={() => this.clickOnEvents.emit(this.eventsTitle)}>
              {this.eventsTitle}
            </div>
          </div>
          <div class="row">
            <NewSinglePost arr={this.events}/>
          </div>
        </div>
      </div>
    );
  }
}

/*
* компонентная функция для вывода элементов news-main-block
 */
const NewSinglePost = (props) => {
  return props.arr.map((item) => {
    return (
      <div class="col-lg">
        <s-abdullakh-new-single-post
          arr={item}
        />
      </div>
    );
  })
}
//
// /*
// * функция для присваивания класса бутстрап
//  */
// function bootstrapClass(x) {
//   switch (x) {
//     case 's-abdullakh-new-post':
//       return 'col-lg-4 col-12';
//
//     case 'events':
//       return 'col-lg';
//   }
// }
