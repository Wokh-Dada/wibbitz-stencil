import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';
import {AbdullakhMyHeader} from "./interface/common.interface";

@Component({
  tag: 's-abdullakh-header',
  styleUrl: 's-abdullakh-header.css',
  shadow: false,
})

export class SAbdullakhHeader implements ComponentInterface {
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
  @Prop() searchSubscribe: any;

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
              <div class="logo" style={{backgroundImage: "url(" + this.logoUrl + ")"}}
                   onClick={() => this.clickOnHeader.emit(this.logoUrl)}>
                <a class="navbar-brand"/>
              </div>
            </div>
            <div class="col">
              <nav>
                <a class="icon" ref={(el) => this.navOpenTag = el} onClick={() => this.toggleMobileMenu()}>
                  &#9776;
                </a>
                <div class="topnav" id="none" ref={(el) => this.navMenuTag = el}>
                  <ItemLink arr={this.menu}/>
                  <a onClick={() => {
                    this.clickOnTheme.emit();
                    this.clickOnSwitchTheme.emit(event.target);
                  }}>
                    {this.theme ?
                      <span class="iconSpan" id="theme_1">
                        <i class="fas fa-toggle-off pl-1" id="theme_1"></i>
                        theme_1
                      </span> :
                      <span class="iconSpan" id="theme_2">
                        <i class="fas fa-toggle-on pl-1" id="theme_2"></i>
                        theme_2
                      </span>
                    }
                  </a>
                </div>
              </nav>
            </div>
            <SearchSubscribe arr={this.searchSubscribe}/>
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
      <s-abdullakh-menu-item arr={item}/>
    );
  })
}

/*
* компонентная функция для вывода элементов меню
 */
const SearchSubscribe = (props) => {
  return props.arr.map((item) => {
    return (
      <s-abdullakh-search-subscribe arr={item}/>
    );
  })
}


