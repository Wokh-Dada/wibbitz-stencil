import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';

@Component({
  tag: 's-abdullakh-news-main-block',
  styleUrl: 's-abdullakh-news-main-block.css',
  shadow: false,
})
export class SAbdullakhNewsMainBlock implements ComponentInterface {

  /**
   * массив Sidebar
   * */
  @Prop() arr: any;

  /**
   * клик по компоненту News
   * */
  @Event() clickOnNews: EventEmitter;

  render() {
    return (
      <div>
        <div class="category_blog" onClick={() => this.clickOnNews.emit(this.arr.category)}>
          {this.arr.category}
        </div>
        <div class="news_section_title_block" onClick={() => this.clickOnNews.emit(this.arr.title)}>
          {this.arr.title}
        </div>
        <div class="news_section_subtitle_block" onClick={() => this.clickOnNews.emit(this.arr.subtitle)}>
          {this.arr.subtitle}.
        </div>
        <div class="text-center text-lg-left">
          <button class="my_btn new_section_btn" onClick={() => this.clickOnNews.emit(this.arr.btnText)}>
            {this.arr.btnText}
          </button>
        </div>
      </div>
    );
  }
}
