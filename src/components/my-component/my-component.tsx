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
          theme={this.theme}
          onClickOnTheme={() => this.clickOnTheme()}
          onClickOnHeader={(event) => this.clickOnHeader(event)}
          onClickOnSwitchTheme={(event) => this.clickOnSwitchTheme(event)}
        />
        <news-a
          newsImg={firstPage.newsImg}
          news={firstPage.news}
          sidebar={firstPage.sidebar}
          onClickOnNews={(event) => this.clickOnNews(event)}
        />
        <new-post
          newPostTitle={firstPage.newPostTitle}
          newPost={firstPage.newPost}
          onClickNewPost={(event) => this.clickOnNewPost(event)}
          onClickOnNewSinglePost={(event) => this.clickOnNewSinglePost(event)}
        />
        <popular-resources
          popularAsideTitle={firstPage.popularAsideTitle}
          popularAside={firstPage.popularAside}
          popularBanner={firstPage.popularBanner}
          onClickOnPopular={(event) => this.clickOnPopular(event)}
        />
        <events-a
          eventsTitle={firstPage.eventsTitle}
          events={firstPage.events}
          onClickOnEvents={(event) => this.clickOnEvents(event)}
          onClickOnNewSinglePost={(event) => this.clickOnNewSinglePost(event)}
        />
        <new-listiner
          newlistner={firstPage.newlistner}
          onClickOnListiner={(event) => this.clickOnListiner(event)}
        />

        <app-blog p={blog.p}></app-blog>
        <footer-a
          footer={footer}
          onClickOnFooter={(event) => this.clickOnFooter(event)}
        />
      </div>
    );
  }

  theme = true;

  public clickOnTheme() {
    this.theme = !this.theme
  }

  /**
   * клик по элементам Header
   */
  public clickOnHeader({detail}) {
    return console.log('clickOnHeader:',  detail)
  }

  /**
   * клик по элементам Toggle theme
   */
  public clickOnSwitchTheme({detail}) {
    return console.log('clickOnSwitchTheme:',  detail)
  }

  /**
   * клик по элементам clickOnNews
   */
  public clickOnNews({detail}) {
    return console.log("clickOnNews:", detail);
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
