import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';

@Component({
  tag: 'news-a',
  styleUrl: 'news-a.css',
  shadow: false,
})
export class NewsA implements ComponentInterface {
  /**
   * ссылка на изображение логотипа
   * */
  @Prop() newsImg: string;

  /**
   * массив news-main-block
   * */
  @Prop() news: any[];

  /**
   * массив Sidebar
   * */
  @Prop() sidebar: any[];

  /**
   * клик по кнопке в компоненте news
   * */
  @Event() clickOnNews: EventEmitter;

  render() {
    return (
      <div class="container">
        <div class="row news">
          <div class="col-lg-7 col-12">
            <div
              class="main_img"
              style={{backgroundImage: "url(" + this.newsImg + ")"}}
              onClick={() => this.clickOnNews.emit(this.newsImg)}
            >
            </div>
            <NewsMainBlock arr={this.news}/>
          </div>
          <div class="col-lg-5 col-12 mt-lg-0 mt-5">
            <aside class="news_right_widget">
              <div class="row">
                <Sidebar arr={this.sidebar}/>
              </div>
            </aside>
          </div>
        </div>
      </div>
    );
  }
}

/*
* компонентная функция для вывода элементов news-main-block
 */
const NewsMainBlock = (props) => {
  return props.arr.map((item) => {
    return (
      <s-abdullakh-news-main-block arr={item}/>
    );
  })
}

/*
* компонентная функция для вывода элементов sidebar
 */
const Sidebar = (props) => {
  return props.arr.map((item) => {
    return (
      <sidebar-a arr={item}/>
    );
  })
}
