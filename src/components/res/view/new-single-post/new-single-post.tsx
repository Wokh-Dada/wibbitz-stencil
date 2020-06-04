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
  @Prop() newPost: any[];

  @Prop() f: string;

  /**
   * клик по кнопке Read Report в компоненте newSinglePost
   * */
  @Event() clickNewPost: EventEmitter;

  render() {

    let singlePost = this.newPost.map((item) => {
      return (
        <div class={this.bootstrapClass(item.block)}>
          <div class="col-12">
            <div class="row">
              <div class="col-12">
                <div class="widget_photo_single_page widget_margin">
                </div>
              </div>
              <div class="col">
                <div class="row">
                  <div class="col-12">
                    <div class="">
                      <div class="widget_content">
                        <div class="category_blog">
                          {item.category}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="">
                      <div class="widget_content_title new_single_post_widget_title">
                        {item.title}
                      </div>
                    </div>
                  </div>
                  <div class="col-12 align-self-end">
                    <div class="widget_read_toggle">
                      <a href="#"
                         onClick={ () => { this.clickNewPost.emit(item) }}
                      >
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
    })
    return (
      <div class="row">
        {singlePost}
      </div>
    );
  }
    public bootstrapClass(x) {
      switch (x) {
        case 'new-post':
          return 'col-lg-4 col-12';

        case 'events':
          return 'col-lg';
      }
    }

}
