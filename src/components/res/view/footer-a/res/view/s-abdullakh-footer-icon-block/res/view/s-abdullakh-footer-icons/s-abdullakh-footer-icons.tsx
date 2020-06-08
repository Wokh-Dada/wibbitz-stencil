import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';

@Component({
  tag: 's-abdullakh-footer-icons',
  styleUrl: 's-abdullakh-footer-icons.css',
  shadow: false,
})
export class FooterA implements ComponentInterface {
  @Prop() arr: any;

  @Event() clickOnFooter: EventEmitter


  render() {
    return (
      <FooterIcon arr={this.arr.icons}/>
    );
  }
}

/*
* компонентная функция для вывода элементов footer2
 */
const FooterIcon = (props) => {
  return props.arr.map((item) => {
    console.log(item.name)
    return (
      <div class="social_link mr-3">
        <a href="">
          <i class={iconClass(item.name)} aria-hidden="true"/>
        </a>
      </div>
    );
  })
}

/**
 * функция для присваивания классов блокам footer-menu
 * */
function iconClass(x) {
  switch (x) {
    case 'facebook':
      return 'fa fa-facebook-official';

    case 'twitter':
      return 'fa fa-twitter-square';

    case 'invision':
      return 'fab fa-invision';

    case 'instagram':
      return 'fa fa-instagram';
  }
}
