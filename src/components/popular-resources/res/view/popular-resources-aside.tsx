import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 'popular-resources-aside',
  styleUrl: 'popular-resources-aside.css',
  shadow: false,
})
export class PopularResourcesAside implements ComponentInterface {
  @Prop() popularAside: any[];

  render() {
    let aside = this.popularAside.map((item) => {
      return (
        <div class="col-12 mb-2">
          <div class="row">
            <div class="col-md-4 col-12">
              <div class="widget_img_popular_aside">
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
                      <a href="#">
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
