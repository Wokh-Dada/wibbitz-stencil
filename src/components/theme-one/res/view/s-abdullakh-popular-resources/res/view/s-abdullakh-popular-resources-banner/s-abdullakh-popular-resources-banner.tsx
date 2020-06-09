import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';

@Component({
  tag: 's-abdullakh-popular-resources-banner',
  styleUrl: 's-abdullakh-popular-resources-banner.css',
  shadow: false,
})
export class SAbdullakhPopularResourcesBanner implements ComponentInterface {
  /**
   * массив для блоков компонента s-abdullakh-s-abdullakh-popular-resources-banner
   * */
  @Prop() arr: any;

  /**
   * массив для блоков компонента s-abdullakh-s-abdullakh-popular-resources-aside
   * */
  @Prop() popularAsideTitle: string;

  /**
   * клик по кнопке Read Report в Sidebar
   * */
  @Event() clickOnAside: EventEmitter;

  /**
   * клик по компоненту  s-abdullakh-s-abdullakh-popular-resources-aside в popular-banner
   * */
  @Event() clickOnPopular: EventEmitter;

  render() {
    return (
      <div class="right_section_child">
        <div class="right_section_title" onClick={() => this.clickOnPopular.emit(this.arr.title)}>
          {this.arr.title}
        </div>
        <div class="widget_read_toggle" onClick={() => this.clickOnPopular.emit(this.arr.btnText)}>
          <a>
            {this.arr.btnText}
          </a>
        </div>
      </div>
    );
  }

}
