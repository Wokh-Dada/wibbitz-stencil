import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 'sidebar-a',
  styleUrl: 'sidebar-a.css',
  shadow: false,
})
export class SidebarA implements ComponentInterface {
  @Prop() sidebar: any[];

  render() {
    console.log('si', this.sidebar);

    let aside = this.sidebar.map((item) => {

      return (
        <div class="col-12">
          <div class="row news_saidbar">
            <div class="col-6">
              <div class="widget_photo">
              </div>
            </div>
            <div class="col">
              <div class="row h-100">
                <div class="col-12">
                  <div class="d-flex align-items-start">
                    <div class="widget_content">
                      <div class={this.categoryClass(item.category)} >
                        {item.category}
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="d-flex align-items-center">
                    <div class="widget_content_title">
                      {item.title}
                    </div>
                  </div>
                </div>
                <div class="col-12 align-self-end">
                  <div class="widget_read_toggle">
                    <a href="#">
                      {item.btnText}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    })

    return (
      <div class="row">
        {aside}
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
