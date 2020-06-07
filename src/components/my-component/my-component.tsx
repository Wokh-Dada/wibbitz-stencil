import {Component, h} from '@stencil/core';
import {blog, firstPage, footer, header} from "../../utils/mock";

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: false
})
export class MyComponent {
  render() {
    return (
      <div>
        <my-header
          menu={header.menu}
          logoUrl={header.logoUrl}
          subscribeText={header.subscribeText}
          onClickOnLogo={() => console.log('clickOnLogo: вы сделали клик по Logo')}
          onClickOnMenu={(item) => {
            this.clickOnMenu(item)
          }}
          onClickOnSwitch={() => console.log('clickOnSwitch: вы сделали клик по перключателю тем')}
          onClickOnSeach={() => console.log('clickOnSwitch: вы сделали клик по кнопке search')}
          onClickOnInput={() => console.log('clickOnInput: вы сделали клик по input')}
          onClickOnSubscribeButton={() => {
            console.log('нажали на кнопку button subscribe')
          }}
        />
        {/*<news-a*/}
        {/*  newsImg={firstPage.newsImg}*/}
        {/*  news={firstPage.news}*/}
        {/*  sidebar={firstPage.sidebar}*/}
        {/*  onClickOnNews={(event) => console.log('clickOnNews:', event)}*/}
        {/*/>*/}
        {/*<new-post*/}
        {/*  newPostTitle={firstPage.newPostTitle}*/}
        {/*  newPost={firstPage.newPost}*/}
        {/*  onClickNewPost={(event) => this.clickOnNewPost(event)}*/}
        {/*  onClickOnNewSinglePost={(event) => this.clickOnNewSinglePost(event)}*/}
        {/*/>*/}
        {/*<popular-resources*/}
        {/*  popularAsideTitle={firstPage.popularAsideTitle}*/}
        {/*  popularAside={firstPage.popularAside}*/}
        {/*  popularBanner={firstPage.popularBanner}*/}
        {/*  onClickOnPopular={(event) => this.clickOnPopular(event)}*/}
        {/*/>*/}
        {/*<events-a*/}
        {/*  eventsTitle={firstPage.eventsTitle}*/}
        {/*  events={firstPage.events}*/}
        {/*  onClickOnEvents={(event) => this.clickOnEvents(event)}*/}
        {/*  onClickOnNewSinglePost={(event) => this.clickOnNewSinglePost(event)}*/}
        {/*/>*/}
        {/*<new-listiner*/}
        {/*  newlistner={firstPage.newlistner}*/}
        {/*  onClickOnListiner={(event) => this.clickOnListiner(event)}*/}
        {/*/>*/}

        <app-blog p={blog.p}></app-blog>
        <footer-a
          footer={footer}
          onClickOnFooter={(event) => this.clickOnFooter(event)}
        />
      </div>
    );
  }

  /**
   * клик по элементам меню
   */
  public clickOnLogo({detail}) {
    return console.log('clickOnLogo:',  detail)
  }

  /**
   * клик по элементам меню
   */
  public clickOnMenu({detail}) {
    return console.log('clickOnMenu:', detail)
  }

  /**
   * клик по элементам сайдбара
   */
  public clickOnSidebar({detail}) {
    return console.log("clickOnSidebar:", detail);
  }

  /**
   * клик по button в компоненете news
   */
  public clickOnNewsButton({detail}) {
    return console.log("clickOnNewsButton:", detail);
  }

  /**
   * клик по ссылке read report в компоненте newpost
   */
  public clickOnNewPost({detail}) {
    return console.log("clickOnNewPost:", detail);
  }

  /**
   * клик по ссылке read report в компоненте newpost
   */
  public clickOnNewSinglePost({detail}) {
    return console.log("clickOnNewSinglePost:", detail);
  }

  /**
   * клик по элементам aside sidebar в компоненте popular resources
   */
  public clickOnPopular({detail}) {
    return console.log("clickOnPopular:", detail);
  }

  /**
   * клик по ссылке read report в компоненте newpost
   */
  public clickOnEvents({detail}) {
    return console.log("clickOnEvents:", detail);
  }

  /**
   * клик по button в компоненете Listiner
   */
  public clickOnListiner({detail}) {
    return console.log("clickOnListiner:", detail);
  }

  /**
   * клик по button в компоненете Listiner
   */
  public clickOnFooter({detail}) {
    return console.log("clickOnFooter:", detail);
  }

}
