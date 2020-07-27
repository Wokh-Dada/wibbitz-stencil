import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';

@Component({
  tag: 's-abdullakh-new-post',
  styleUrl: 's-abdullakh-new-post.css',
  shadow: false,
})
export class SAbdullakhNewPost implements ComponentInterface {
  /**
   * массив newsPost
   * */
  @Prop() newPost: any[];

  /**
   * текст заголовка
   * */
  @Prop() newPostTitle: string;

  /**
   * клик по в компоненте SAbdullakhNewPost
   * */
  @Event() clickNewPost: EventEmitter;

  /**
   * клик по в компоненте SAbdullakhNewSinglePost
   * */
  @Event() clickOnNewSinglePost: EventEmitter;

  render() {
    return (
      <section class="container">
        <div class="row">
          <div class="col-12">
            <div class="titles titles_new_post" onClick={() => this.clickNewPost.emit(this.newPostTitle)}>
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
      <div class="col-lg-4 col-12">
        <s-abdullakh-new-single-post arr={item}/>
      </div>
    );
  })
}

// /*
// * функция для присваивания класса бутстрап
//  */
// const bootstrapClass = (x) => {
//   switch (x) {
//     case 's-abdullakh-new-post':
//       return 'col-lg-4 col-12';
//
//     case 'events':
//       return 'col-lg';
//   }
// }
