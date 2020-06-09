import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';

@Component({
  tag: 'menu-item',
  styleUrl: 'menu-item.css',
  shadow: false,
})

export class MyHeader implements ComponentInterface {
  /**
   * массив меню
   * */
  @Prop() arr: any;

  /**
   * клик по конкретному меню
   * */
  @Event() clickOnHeader: EventEmitter

  render() {
    return (
      <span onClick={() => this.clickOnHeader.emit(this.arr)}>
          <a >
            {this.arr.linkName}
          </a>
        </span>
    );
  }
}
