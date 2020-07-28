import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';

@Component({
  tag: 's-abdullakh-listiner-title',
  styleUrl: 's-abdullakh-listiner-title.css',
  shadow: false,
})
export class SAbdullakhListinerTitle implements ComponentInterface {

  /**
   * массив Listener
   * */
  @Prop() arr: any;

  /**
   * клик по кнопке button в Listiner
   * */
  @Event() clickOnListiner: EventEmitter;


  render() {
    return (
      <div class="listenerTitleWrapper">
        <div class="newlistener_title" onClick={() => this.clickOnListiner.emit(this.arr.title)}>
          {this.arr.title}
        </div>
        <div class="newlistiner_subtitle" onClick={() => this.clickOnListiner.emit(this.arr.subtitle)}>
          {this.arr.subtitle}
          <a onClick={() => this.clickOnListiner.emit(this.arr.linkText)}>
            {this.arr.linkText}
          </a>
        </div>
      </div>
    );
  }
}
