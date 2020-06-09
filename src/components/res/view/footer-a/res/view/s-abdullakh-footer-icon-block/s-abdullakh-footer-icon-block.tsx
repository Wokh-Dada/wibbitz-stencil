import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';

@Component({
  tag: 's-abdullakh-footer-icon-block',
  styleUrl: 's-abdullakh-footer-icon-block.css',
  shadow: false,
})
export class FooterA implements ComponentInterface {

  @Prop() arr: any;

  @Event() clickOnFooter: EventEmitter


  render() {
    return (
      <FooterTitle arr={this.arr}/>
    );
  }
}

/*
* компонентная функция для вывода элементов footer2
 */
const FooterTitle = (props) => {
  return props.arr.slice(0, 1).map((item) => {
    return (
      <div>
        <div class="corp_info" onClick={() => this.clickOnFooter.emit(event)}>
          {item.firstBlockTitle}
        </div>
        <div class="social_links mt-4">
          <s-abdullakh-footer-icons arr={item} />
        </div>
      </div>
    );
  })
}

// /**
//  * функция для присваивания классов блокам footer-menu
//  * */
// function categoryClass(x) {
//   switch (x) {
//     case 'facebook':
//       return 'fa fa-facebook-official';
//
//     case 'twitter':
//       return 'fa fa-twitter-square';
//
//     case 'invision':
//       return 'fab fa-invision';
//
//     case 'instagram':
//       return 'fa fa-instagram';
//   }
// }
