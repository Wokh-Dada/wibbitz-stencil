import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 's-abdullakh-footer-menu',
  styleUrl: 's-abdullakh-footer-menu.css',
  shadow: false,
})
export class FooterA implements ComponentInterface {
  /**
   * массив элементов Sidebar
   * */
  @Prop() arr: any;

  render() {
    return (
      <div class="title_links">
        {this.arr.title}
        <div class="footer_links">
          {this.arr.footerLinkComplited ? <FootLink arr={this.arr.footerItemLink}/> : ''}
          {this.arr.footerChildLinkComplited ? <FootInLink arr={this.arr.footerChildrenLink}/> : ''}
        </div>
      </div>
    );
  }
}

/*
* компонентная функция для вывода элементов меню
 */
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

const FootInLink = (props) => {
  return props.arr.map((item) => {
    return (
      <div class="title_links title_links_sm">
        {item.title}
        <div class="footer_links mt-2">
          {item.footerItemLink.map((i) => {
            return (
              <span class="footer_link">
                <a href="">
                  {i.linkName}
                </a>
              </span>
            );
          })}
        </div>
      </div>
    );
  })
}

