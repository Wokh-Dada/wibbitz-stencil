import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';

@Component({
  tag: 'new-listiner',
  styleUrl: 'new-listiner.css',
  shadow: false,
})
export class NewListiner implements ComponentInterface {
  @Prop() newlistner: any[];

  /**
   * клик в Listiner
   * */
  @Event() clickOnListiner: EventEmitter;

  render() {
    return (
      <section class="container-fluid">
        <Listiner arr={this.newlistner}/>
      </section>
    );
  }
}

/*
* компонентная функция для вывода элементов listiner
 */
const Listiner = (props) => {
  return props.arr.map((item) => {
    return (
      <s-abdullakh-listiner arr={item}/>
    );
  })
}
