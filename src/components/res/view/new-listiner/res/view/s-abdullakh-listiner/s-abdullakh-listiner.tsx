import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';

@Component({
  tag: 's-abdullakh-listiner',
  styleUrl: 's-abdullakh-listiner.css',
  shadow: false,
})
export class NewListiner implements ComponentInterface {

  /**
   * массив Listener
   * */
  @Prop() arr: any;

  /**
   * клик по кнопке button в Listiner
   * */
  @Event() clickOnListiner: EventEmitter;


  render() {
    return (
      <div class="container_update  newlistiner_section">
        <div class="row subscribe p-5">
          <div class="col-lg-6 d-none d-lg-block">
            <div
              class="newlistener_title"
              onClick={() => this.clickOnListiner.emit(this.arr.title)}
            >
              {this.arr.title}
            </div>
            <div
              class="newlistiner_subtitle"
              onClick={() => this.clickOnListiner.emit(this.arr.subtitle)}
            >
              {this.arr.subtitle}
              <a onClick={() => this.clickOnListiner.emit(this.arr.linkText)}>
                {this.arr.linkText}
              </a>
            </div>
          </div>
          <div class="col-lg-6 col-12 px-5">
            <div class="newlistiner_form_email">
              <form class="form">
                <div class="input-group">
                  <input
                    type="text"
                    placeholder="Enter work email"
                    class="form-control rounded "
                    onClick={() => this.clickOnListiner.emit(event)}
                  />
                  <div class="input-group-append">
                    <button
                      type="submit"
                      class="my_btn btn_newlistener"
                      onClick={() => this.clickOnListiner.emit(this.arr.btnText)}
                    >
                      {this.arr.btnText}
                    </button>
                  </div>
                </div>
              </form>
              <div class="d-none" onClick={() => this.clickOnListiner.emit(event)}>
                <span><i class="fas fa-bolt"></i> 6145 people</span> are reading this newsletter every week
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
