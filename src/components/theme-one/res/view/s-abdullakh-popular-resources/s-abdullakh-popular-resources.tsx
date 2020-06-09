import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';

@Component({
  tag: 's-abdullakh-popular-resources',
  styleUrl: 's-abdullakh-popular-resources.css',
  shadow: false,
})
export class SAbdullakhPopularResources implements ComponentInterface {
  /**
   * массив для блоков компонента s-abdullakh-s-abdullakh-popular-resources-aside
   * */
  @Prop() popularAside: any[];

  /**
   * массив для блоков компонента s-abdullakh-s-abdullakh-popular-resources-banner
   * */
  @Prop() popularBanner: any[];

  /**
   * массив для блоков компонента s-abdullakh-s-abdullakh-popular-resources-aside
   * */
  @Prop() popularAsideTitle: string;

  /**
   * клик по компоненту s-abdullakh-popular-resources
   * */
  @Event() clickOnPopular: EventEmitter;

  render() {
    return (
      <section class="container mt-5">
        <div class="row pt-5">
          <div class="col-12">
            <div class="resources_title" onClick={() => this.clickOnPopular.emit(this.popularAsideTitle)}>
              {this.popularAsideTitle}
            </div>
          </div>
          <div class="col-lg-7 col-12">
            <div class="row">
              <div class="col-12 mb-2">
                <PopularAside
                  arr={this.popularAside}
                />
              </div>
            </div>
          </div>
          <div class="col-lg-5 d-none d-lg-block" onClick={() => this.clickOnPopular.emit(this.popularBanner)}>
            <div class="right_section">
              <div class="row h-100">
                <div class="col-12 align-self-center">
                  <PopularBanner arr={this.popularBanner}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

/*
* компонентная функция для вывода элементов news-main-block
 */
const PopularAside = (props) => {
  return props.arr.map((item) => {
    return (
      <div class="col-12 mb-2">
        <s-abdullakh-popular-resources-aside arr={item}/>
      </div>
    );
  })
}

/*
* компонентная функция для вывода элементов news-main-block
 */
const PopularBanner = (props) => {
  return props.arr.map((item) => {
    return (
      <div class="col-12 mb-2">
        <s-abdullakh-popular-resources-banner arr={item}/>
      </div>
    );
  })
}
