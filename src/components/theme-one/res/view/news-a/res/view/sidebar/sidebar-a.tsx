import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';

@Component({
  tag: 'sidebar-a',
  styleUrl: 'sidebar-a.css',
  shadow: false,
})
export class SidebarA implements ComponentInterface {
  /**
   * массив элементов Sidebar
   * */
  @Prop() arr: any;

  /**
   * клик по кнопке в компоненте news
   * */
  @Event() clickOnNews: EventEmitter;

  render() {
    return (
        <div class="col-12">
          <div class="row news_saidbar">
            <div class="col-6">
              <div
                class="widget_photo"
                style={{backgroundImage: "url(" + this.arr.widgetImg + ")"}}
                onClick={() => this.clickOnNews.emit(this.arr.widgetImg)}
              >
              </div>
            </div>
            <div class="col">
              <div class="row h-100">
                <div class="col-12">
                  <div class="d-flex align-items-start">
                    <div class="widget_content">
                      <div
                        class={this.categoryClass(this.arr.category)}
                        onClick={() => this.clickOnNews.emit(this.arr.category)}
                      >
                        {this.arr.category}
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="d-flex align-items-center">
                    <div
                      class="widget_content_title"
                      onClick={() => this.clickOnNews.emit(this.arr.title)}
                    >
                      {this.arr.title}
                    </div>
                  </div>
                </div>
                <div class="col-12 align-self-end">
                  <div class="widget_read_toggle">
                    <a onClick={() => this.clickOnNews.emit(this.arr.btnText)}>
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

  /***/
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
