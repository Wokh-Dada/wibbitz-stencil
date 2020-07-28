import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';

@Component({
  tag: 's-abdullakh-listiner-form',
  styleUrl: 's-abdullakh-listiner-form.css',
  shadow: false,
})
export class SAbdullakhListinerForm implements ComponentInterface {

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
      <div class="newlistiner_form_email">
        <form class="form">
          <div class="input-group">
            <input type="text" placeholder="Enter work email" class="form-control rounded"
                   onClick={() => this.clickOnListiner.emit(event)}/>
            <div class="input-group-append">
              <button type="submit" class="my_btn btn_newlistener"
                      onClick={() => this.clickOnListiner.emit(this.arr.btnText)}>
                {this.arr.btnText}
              </button>
            </div>
          </div>
        </form>
        <div class="d-none" onClick={() => this.clickOnListiner.emit(event)}>
          <span><i class="fas fa-bolt"></i> 6145 people</span> are reading this newsletter every week
        </div>
      </div>
    );
  }
}

