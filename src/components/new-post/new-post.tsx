import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 'new-post',
  styleUrl: 'new-post.css',
  shadow: false,
})
export class NewPost implements ComponentInterface {
  @Prop() newPost: any[];

  render() {
    return (
      <section class="container">
        <div class="row">
          <div class="col-12">
            <div class="titles titles_new_post">
              New Blog Posts
            </div>
          </div>
          <div >
            <new-single-post newPost={this.newPost}/>
          </div>
        </div>
      </section>

    );
  }

}
