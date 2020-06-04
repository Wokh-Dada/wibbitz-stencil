import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';

@Component({
  tag: 'popular-resources-aside',
  styleUrl: 'popular-resources-aside.css',
  shadow: false,
})
export class PopularResourcesAside implements ComponentInterface {
  /**
   * массив для блоков компонента popular-resources-aside
   * */
  @Prop() popularAside: any[];

  /**
   * клик по кнопке Read Report в Sidebar
   * */
  @Event() clickOnAside: EventEmitter;

  render() {
    let aside = this.popularAside.map((item) => {
      return (
        <div class="col-12 mb-2">
          <div class="row">
            <div class="col-md-4 col-12">
              <div class="widget_img_popular_aside" style={{backgroundImage: "url(" + item.asidetImg + ")"}}>
              </div>
            </div>
            <div class="col">
              <div class="row h-100">
                <div class="col-12">
                  <div class="widget_start">
                    <div class="widget_content">
                      <div class={this.categoryClass(item.category)}>
                        {item.category}
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="widget_center">
                    <div class="widget_content_title">
                      {item.title}
                    </div>
                  </div>
                </div>
                <div class="col-12 align-self-end">
                  <div class="widget_end">
                    <div class="widget_read_toggle">
                      <a href="#" onClick={ () => { this.clickOnAside.emit(item) }}>
                        {item.btnText}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div>
        {aside}
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
