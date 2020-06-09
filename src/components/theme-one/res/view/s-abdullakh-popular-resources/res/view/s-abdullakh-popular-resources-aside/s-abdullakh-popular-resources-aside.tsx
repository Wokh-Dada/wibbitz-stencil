import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';

@Component({
  tag: 's-abdullakh-popular-resources-aside',
  styleUrl: 's-abdullakh-popular-resources-aside.css',
  shadow: false,
})
export class SAbdullakhPopularResourcesAside implements ComponentInterface {
  /**
   * массив для блоков компонента s-abdullakh-s-abdullakh-popular-resources-aside
   * */
  @Prop() arr: any;

  /**
   * клик по компоненту  s-abdullakh-s-abdullakh-popular-resources-aside в s-abdullakh-popular-resources
   * */
  @Event() clickOnPopular: EventEmitter;

  render() {

    return (
      <div class="row">
        <div class="col-md-4 col-12">
          <div
            class="widget_img_popular_aside"
            style={{backgroundImage: "url(" + this.arr.asidetImg + ")"}}
            onClick={() => this.clickOnPopular.emit(this.arr.asidetImg)}
          >
          </div>
        </div>
        <div class="col">
          <div class="row h-100">
            <div class="col-12">
              <div class="widget_start">
                <div class="widget_content">
                  <div class={this.categoryClass(this.arr.category)} onClick={() => this.clickOnPopular.emit(this.arr.category)}>
                    {this.arr.category}
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="widget_center">
                <div class="widget_content_title" onClick={() => this.clickOnPopular.emit(this.arr.title)}>
                  {this.arr.title}
                </div>
              </div>
            </div>
            <div class="col-12 align-self-end">
              <div class="widget_end">
                <div class="widget_read_toggle">
                  <a onClick={ () => { this.clickOnPopular.emit(this.arr.btnText) }}>
                    {this.arr.btnText}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  public categoryClass(x) {
    switch (x) {
      case 'Report':
        return 'category_report';

      case 'Blog Post':
        return 'category_blog';

      case 'Webinar':
        return 'category_webinar';
    }
  }
}
