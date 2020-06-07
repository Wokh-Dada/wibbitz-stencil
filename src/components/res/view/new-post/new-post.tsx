import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';

@Component({
  tag: 'new-post',
  styleUrl: 'new-post.css',
  shadow: false,
})
export class NewPost implements ComponentInterface {
  /**
   * массив newsPost
   * */
  @Prop() newPost: any[];

  /**
   * текст заголовка
   * */
  @Prop() newPostTitle: string;

  /**
   * клик по в компоненте NewPost
   * */
  @Event() clickNewPost: EventEmitter;

  /**
   * клик по в компоненте NewSinglePost
   * */
  @Event() clickOnNewSinglePost: EventEmitter;

  render() {
    return (
      <section class="container">
        <div class="row">
          <div class="col-12">
            <div
              class="titles titles_new_post"
              onClick={ () => this.clickNewPost.emit(this.newPostTitle) }
            >
              {this.newPostTitle}
            </div>
          </div>
          <div class="row">
            <NewSinglePost arr={this.newPost}/>
          </div>
        </div>
      </section>
    );
  }
}

/*
* компонентная функция для вывода элементов news-main-block
 */
const NewSinglePost = (props) => {
  return props.arr.map((item) => {
    return (
      <div class={bootstrapClass(item.block)}>
        <new-single-post arr={item}/>
      </div>
    );
  })
}

/*
* функция для присваивания класса бутстрап
 */
function bootstrapClass(x) {
  switch (x) {
    case 'new-post':
      return 'col-lg-4 col-12';

    case 'events':
      return 'col-lg';
  }
}
