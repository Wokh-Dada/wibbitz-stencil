import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';

@Component({
  tag: 'footer-a',
  styleUrl: 'footer-a.css',
  shadow: false,
})
export class FooterA implements ComponentInterface {
  @Prop() footer: any;

  @Event() clickOnFooter: EventEmitter


  render() {
    return (
      <footer class="container-fluid footer">
        <div class="container">
          <div class="row footer_margin">
            <FooterIconBlock arr={this.footer} />
            <FooterItemBlocks arr={this.footer}/>
          </div>
          <div class="copyright">
            <div class="row copyright_content">
              <div class="col-12">
                <div class="copyright_content_languages">
                  <span class="language_icon pr-2">
                    <i class="fas fa-globe-americas"></i>
                  </span>
                  Choose language
                </div>
                <div class="content_language">
                  <span class="pr-4">
                    <a>
                      English(United States)
                    </a>
                  </span>
                  <span>
                  <a>
                    French
                  </a>
                </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

/*
* компонентная функция для вывода элементов footer2
 */
const FooterItemBlocks = (props) => {
  return props.arr.slice(1, 5).map((item) => {
    return (
      <div class="col-lg-2 col-sm-4">
        <s-abdullakh-footer-menu arr={item}/>
      </div>
    );
  })
}

/*
* компонентная функция для вывода элементов footer2
 */
const FooterIconBlock = (props) => {
  return props.arr.slice(0, 1).map((item) => {
    return (
      <div class="col-lg-3 col-sm-4">
        <s-abdullakh-footer-icon-block arr={item} />
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
