import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 'news-a',
  styleUrl: 'news-a.css',
  shadow: false,
})
export class NewsA implements ComponentInterface {
  @Prop() sidebar: any[];

  render() {
    console.log('sd0', this.sidebar);
    return (
      <div class="container">
        <div class="row news">
          <div class="col-lg-7 col-12">
            <div class="main_img">

            </div>
            <div>
              <div class="category_blog">
                Blog Post
              </div>
              <div class="news_section_title_block">
                How to opimize your Facebook & Instagram video ads for succes
              </div>
              <div class="news_section_subtitle_block">
                Instagram and Facebook video ads qre extremely popular among marketers these days. Not only are they
                more
                engaging and entertaining, they`re loved by many...
              </div>
              <div class="text-center text-lg-left">
                <button class="my_btn new_section_btn">
                  Read Story
                </button>
              </div>
            </div>
          </div>
          <div class="col-lg-5 col-12 mt-lg-0 mt-5">
            <aside class="news_right_widget">
                <sidebar-a sidebar={this.sidebar}/>
            </aside>
          </div>
        </div>
      </div>


    );
  }

}
