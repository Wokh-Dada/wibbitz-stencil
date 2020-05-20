import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 'my-header',
  styleUrl: 'my-header.css',
  shadow: false,
})

export class MyHeader implements ComponentInterface {
  @Prop() menu : any[];


  render() {
    const menuItem = this.menu.map(function (item) {
      return (
        <a href="#">{item.linkName}</a>
      );
    })

    return (
      <header class="container-fluid" >
        <div class="container_update">
          <div class="row main__menu">
            <div class="col-auto">
              <div class="logo">
                <a href="#" class="navbar-brand"/>
              </div>
            </div>
            <div class="col">
              <nav>
                <div class="topnav" id="Mytopnav">
                  <a href="#" id="menu" class="icon">
                    &#9776;
                  </a>
                  {menuItem}
                  <span>
                    <a>
                      <i class="fas fa-toggle-off pl-1"/>
                      theme_1
                    </a>
                  </span>
                </div>
              </nav>
            </div>
            <div class="col-auto d-none d-xl-block">
              <div class="header_search_block">
                <a href="#" class="nav-link">
                  <span class="material-icons">
                  search
                  </span>
                </a>
              </div>
              <div class="header_subscribe_block">
                <div class="input-group">
                  <input type="email" placeholder="Enter work email" class="header_subscribe_input"/>
                  <div class="input-group-append">
                    <button class="header_btn">
                      <span>
                      Subscribe
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

}
