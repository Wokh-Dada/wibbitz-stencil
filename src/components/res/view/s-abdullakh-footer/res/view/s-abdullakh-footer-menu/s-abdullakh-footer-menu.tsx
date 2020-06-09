import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 's-abdullakh-footer-menu',
  styleUrl: 's-abdullakh-footer-menu.css',
  shadow: false,
})
export class SAbdullakhFooterMenu implements ComponentInterface {
  /**
   * массив элементов Sidebar
   * */
  @Prop() arr: any;

  render() {
    return (
      <FooterMenu arr={this.arr} />
    );
  }
}

/*
* компонентная функция для вывода элементов footer2
 */
const FooterMenu = (props) => {
  return props.arr.map((item) => {
    return (
      <div class="title_links">
        {item.title}
        <s-abdullakh-footer-links arr={item} />
      </div>
    );
  })
}


