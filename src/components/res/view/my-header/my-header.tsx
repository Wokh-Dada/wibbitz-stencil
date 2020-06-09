import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';
import {AbdullakhMyHeader} from "./interface/common.interface";

@Component({
  tag: 'my-header',
  styleUrl: 'my-header.css',
  shadow: false,
})

export class MyHeader implements ComponentInterface {
  /**
   * массив меню
   * */
  @Prop() menu: AbdullakhMyHeader[] = [];

  /**
   * массив меню
   * */
  @Prop() theme: boolean;

  /**
   * ссылка на изображение логотипа
   * */
  @Prop() logoUrl: string;

  /**
   * ссылка на изображение логотипа
   * */
  @Prop() subscribeText: string;

  /**
   * клик по логотипу
   * */
  @Event() clickOnTheme: EventEmitter;

  /**
   * клик по логотипу
   * */
  @Event() clickOnHeader: EventEmitter;

  /**
   * клик по Switch Theme
   * */
  @Event() clickOnSwitchTheme: EventEmitter;


  /**
   * ref-ы для мобильного меню
   * */
  navOpenTag: HTMLElement;
  navMenuTag: HTMLElement;

  render() {
    return (
      <header class="container-fluid">
        <div class="container_update">
          <div class="row main__menu">
            <div class="col-auto">
              <div
                class="logo"
                style={{backgroundImage: "url(" + this.logoUrl + ")"}}
                onClick={() => this.clickOnHeader.emit(this.logoUrl)}
              >
                <a class="navbar-brand"/>
              </div>
            </div>
            <div class="col">
              <nav>
                <a
                  class="icon"
                  ref={(el) => this.navOpenTag = el}
                  onClick={() => this.toggleMobileMenu()}
                >
                  &#9776;
                </a>
                <div
                  class="topnav" id="none"
                  ref={(el) => this.navMenuTag = el}
                >
                  <ItemLink arr={this.menu}/>
                  {
                    this.theme ?
                      <a id="theme_1"
                         onClick={() => {
                           this.clickOnTheme.emit();
                           this.clickOnSwitchTheme.emit(event);
                         }}
                      >
                        <i class="fas fa-toggle-off pl-1"></i>
                        theme_1
                      </a> :
                      <a id="theme_2"
                         onClick={() => {
                           this.clickOnTheme.emit();
                           this.clickOnSwitchTheme.emit(event);
                         }}
                      >
                        <i class="fas fa-toggle-on pl-1"></i>
                        theme_2
                      </a>
                  }
                </div>
              </nav>
            </div>
            <div class="col-auto d-none d-xl-block">
              <div class="header_search_block" onClick={() => this.clickOnHeader.emit(event)}>
                <a href="#" class="nav-link">
                  <span class="material-icons">
                    search
                  </span>
                </a>
              </div>
              <div class="header_subscribe_block">
                <div class="input-group">
                  <input
                    type="email"
                    placeholder="Enter work email"
                    class="header_subscribe_input"
                    onClick={() => this.clickOnHeader.emit(event)}
                  />
                  <div class="input-group-append">
                    <button
                      class="header_btn"
                      onClick={() => {
                        this.clickOnHeader.emit(this.subscribeText)
                      }}
                    >
                      <span>
                        {this.subscribeText}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }

  /**
   * меню для мобильного меню
   * */
  public toggleMobileMenu() {
    if (this.navMenuTag.id === "none") {
      this.navMenuTag.id = 'block';
    } else {
      this.navMenuTag.id = 'none';
    }
  }

}

/*
* компонентная функция для вывода элементов меню
 */
const ItemLink = (props) => {
  return props.arr.map((item) => {
    return (
      <menu-item arr={item}></menu-item>
    );
  })
}



