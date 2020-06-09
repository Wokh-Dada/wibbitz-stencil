import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 's-abdullakh-footer-links',
  styleUrl: 's-abdullakh-footer-links.css',
  shadow: false,
})
export class SAbdullakhFooterLinks implements ComponentInterface {
  /**
   * массив элементов Sidebar
   * */
  @Prop() arr: any;

  render() {
    return (
     <FootLink arr={this.arr.items} />
    );
  }
}

/*
* компонентная функция для вывода элементов меню
 **/
const FootLink = (props) => {
  return props.arr.map((item) => {
    return (
      <span class="footer_link">
      <a href="">
        {item.linkName}
      </a>
    </span>
    );
  })
}



