import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';

@Component({
  tag: 's-abdullakh-menu-item',
  styleUrl: 's-abdullakh-menu-item.css',
  shadow: false,
})

export class SAbdullakhMenuItem implements ComponentInterface {
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
