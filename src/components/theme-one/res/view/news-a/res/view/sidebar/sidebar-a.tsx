import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';

@Component({
  tag: 'sidebar-a',
  styleUrl: 'sidebar-a.css',
  shadow: false,
})
export class SidebarA implements ComponentInterface {
  /**
   * путь url для изображения Sidebar
   * */
  @Prop() arr: any;


  /**
   * клик по кнопке Read Report в Sidebar
   * */
  @Event() clickOnSidebar: EventEmitter;



  render() {
    return (
        <div class="col-12">
          <div class="row news_saidbar">
            <div class="col-6">
              <div class="widget_photo" style={{backgroundImage: "url(" + this.arr.widgetImg + ")"}}>
              </div>
            </div>
            <div class="col">
              <div class="row h-100">
                <div class="col-12">
                  <div class="d-flex align-items-start">
                    <div class="widget_content">
                      <div class={this.categoryClass(this.arr.category)} >
                        {this.arr.category}
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="d-flex align-items-center">
                    <div class="widget_content_title">
                      {this.arr.title}
                    </div>
                  </div>
                </div>
                <div class="col-12 align-self-end">
                  <div class="widget_read_toggle">
                    <a href="#" onClick={() => this.clickOnSidebar.emit(this.arr)}>
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
