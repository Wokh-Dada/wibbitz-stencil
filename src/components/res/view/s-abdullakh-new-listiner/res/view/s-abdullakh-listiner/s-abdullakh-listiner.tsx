import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';

@Component({
  tag: 's-abdullakh-listiner',
  styleUrl: 's-abdullakh-listiner.css',
  shadow: false,
})
export class SAbdullakhListiner implements ComponentInterface {

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
      <div class="container_update  newlistiner_section">
        <div class="row subscribe p-5">
          <ListinerTitle arr={this.arr.listnerTitle}/>
          <ListinerForm arr={this.arr.listnerBtn}/>
        </div>
      </div>
    );
  }
}

/*
* компонентная функция для вывода элементов ListinerTitle
 */
const ListinerTitle = (props) => {
  return props.arr.map((item) => {
    console.log(item)
    return (
      <div class="col-lg-6 d-none d-lg-block">
        <s-abdullakh-listiner-title arr={item}/>
      </div>
    );
  })
}

/*
* компонентная функция для вывода элементов ListinerForm
 */
const ListinerForm = (props) => {
  return props.arr.map((item) => {
    console.log(item)
    return (
      <div class="col-lg-6 col-12 px-5">
        <s-abdullakh-listiner-form arr={item}/>
      </div>
    );
  })
}
