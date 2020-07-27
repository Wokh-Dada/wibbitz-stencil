import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';

@Component({
  tag: 's-abdullakh-search-subscribe',
  styleUrl: 's-abdullakh-search-subscribe.css',
  shadow: false,
})

export class SAbdullakhSearchSubscribe implements ComponentInterface {
  /**
   * массив меню
   * */
  @Prop() arr: any;

  /**
   * клик по конкретному меню
   * */
  @Event() clickOnHeader: EventEmitter

  render() {
    return (
      <div class="col-auto d-none d-xl-block">
        <div>
          <div class="header_search_block" onClick={() => this.clickOnHeader.emit(event)}>
            <a href="#" class="nav-link">
              <span class="material-icons">
                {this.arr.searchIcon}
              </span>
            </a>
          </div>
          <div class="header_subscribe_block">
            <div class="input-group">
              <input type="email" placeholder="Enter work email" class="header_subscribe_input" onClick={() => this.clickOnHeader.emit(event)}/>
              <div class="input-group-append">
                <button class="header_btn" onClick={() => this.clickOnHeader.emit(this.arr.subscribeText)}>
                  <span>
                    {this.arr.subscribeText}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}



