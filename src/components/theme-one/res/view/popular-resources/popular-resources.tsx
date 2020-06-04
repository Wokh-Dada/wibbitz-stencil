import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';

@Component({
  tag: 'popular-resources',
  styleUrl: 'popular-resources.css',
  shadow: false,
})
export class PopularResources implements ComponentInterface {
  /**
   * массив для блоков компонента popular-resources-aside
   * */
  @Prop()popularAside: any[];

  /**
   * клик по кнопке Read Report в Sidebar
   * */
  @Event() clickOnAside: EventEmitter;

  render() {
    return (
      <section class="container mt-5">
        <div class="row pt-5">
          <div class="col-12">
            <div class="resources_title">
              Popular Resources
            </div>
          </div>
          <div class="col-lg-7 col-12">
            <div class="row">
              <div class="col-12 mb-2">
                <popular-resources-aside
                  popularAside={this.popularAside}
                />
              </div>
            </div>
          </div>
          <div class="col-lg-5 d-none d-lg-block">
            <div class="right_section">
              <div class="row h-100">
                <div class="col-12 align-self-center">
                  <div class="right_section_child">
                    <div class="right_section_title">
                      Storyteller Circle Event Series
                    </div>
                    <div class="widget_read_toggle">
                      <a href="#">
                        Watch Webinar
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    );
  }

}
