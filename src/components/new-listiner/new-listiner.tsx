import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 'new-listiner',
  styleUrl: 'new-listiner.css',
  shadow: false,
})
export class NewListiner implements ComponentInterface {
  @Prop()newlistner: any[];

  render() {
    let listiner = this.newlistner.map((item) => {
      return (
        <div class="container_update  newlistiner_section">
          <div class="row subscribe p-5">
            <div class="col-lg-6 d-none d-lg-block">
              <div class="newlistener_title">
                {item.title}
              </div>
              <div class="newlistiner_subtitle">
                {item.subtitle}
                <a href="">
                  {item.linkText}
                </a>
              </div>
            </div>
            <div class="col-lg-6 col-12 px-5">
              <div class="newlistiner_form_email">
                <form class="form">
                  <div class="input-group">
                    <input type="text"
                           placeholder="Enter work email"
                           class="form-control rounded "
                            />
                    <div class="input-group-append">
                      <button type="submit" class="my_btn btn_newlistener">
                        {item.btnText}
                      </button>
                    </div>
                  </div>
                </form>
                <div class="d-none">
                  <span><i class="fas fa-bolt"></i> 6145 people</span> are reading this newsletter every week
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    })
    return (
      <section class="container-fluid">
        {listiner}
      </section>

  );
  }

  }
