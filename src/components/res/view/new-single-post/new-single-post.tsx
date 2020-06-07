import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';

@Component({
  tag: 'new-single-post',
  styleUrl: 'new-single-post.css',
  shadow: false,
})
export class NewSinglePost implements ComponentInterface {
  /**
   * массив блоков в компоненте newSinglePost
   * */
  @Prop() arr: any;

  /**
   * клик по в компоненте NewSinglePost
   * */
  @Event() clickOnNewSinglePost: EventEmitter;

  render() {
    return (
      <div class="col-12">
        <div class="row">
          <div class="col-12">
            <div
              class="widget_photo_single_page widget_margin"
              style={{backgroundImage: "url(" + this.arr.newPostImg + this.arr.eventsImg + ")"}}
              onClick={() => this.clickOnNewSinglePost.emit(this.arr.newPostImg || this.arr.eventsImg)}
            >
            </div>
          </div>
          <div class="col">
            <div class="row">
              <div class="col-12">
                <div class="">
                  <div class="widget_content">
                    <div
                      class="category_blog"
                      onClick={() => this.clickOnNewSinglePost.emit(this.arr.category)}
                    >
                      {this.arr.category}
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div class="">
                  <div
                    class="widget_content_title new_single_post_widget_title"
                    onClick={() => this.clickOnNewSinglePost.emit(this.arr.title)}
                  >
                    {this.arr.title}
                  </div>
                </div>
              </div>
              <div class="col-12 align-self-end">
                <div class="widget_read_toggle">
                  <a
                    onClick={() => this.clickOnNewSinglePost.emit(this.arr.btnText)}
                  >
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
}
