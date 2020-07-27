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
        <s-abdullakh-header
          menu={header.menu}
          logoUrl={header.logoUrl}
          searchSubscribe={header.searchSubscribe}
          theme={this.theme}
          onClickOnTheme={() => this.clickOnTheme()}
          onClickOnHeader={(event) => this.clickOnHeader(event)}
          onClickOnSwitchTheme={(event) => this.clickOnSwitchTheme(event)}
        />
        {/*<s-abdullakh-news*/}
        {/*  newsImg={firstPage.newsImg}*/}
        {/*  news={firstPage.news}*/}
        {/*  sidebar={firstPage.sidebar}*/}
        {/*  onClickOnNews={(event) => this.clickOnNews(event)}*/}
        {/*/>*/}
        {/*<s-abdullakh-new-post*/}
        {/*  newPostTitle={firstPage.newPostTitle}*/}
        {/*  newPost={firstPage.newPost}*/}
        {/*  onClickNewPost={(event) => this.clickOnNewPost(event)}*/}
        {/*/>*/}
        {/*<s-abdullakh-popular-resources*/}
        {/*  popularAsideTitle={firstPage.popularAsideTitle}*/}
        {/*  popularAside={firstPage.popularAside}*/}
        {/*  popularBanner={firstPage.popularBanner}*/}
        {/*  onClickOnPopular={(event) => this.clickOnPopular(event)}*/}
        {/*/>*/}
        {/*<s-abdullakh-events*/}
        {/*  eventsTitle={firstPage.eventsTitle}*/}
        {/*  events={firstPage.events}*/}
        {/*  onClickOnEvents={(event) => this.clickOnEvents(event)}*/}
        {/*/>*/}
        {/*<s-abdullakh-new-listiner*/}
        {/*  newlistner={firstPage.newlistner}*/}
        {/*  onClickOnListiner={(event) => this.clickOnListiner(event)}*/}
        {/*/>*/}
        <s-abdullakh-app-blog p={blog.p}/>
        <s-abdullakh-footer
          footer={footer}
          onClickOnFooter={(event) => this.clickOnFooter(event)}
        />
      </div>
    );
  }

  /**
   * boolean для вывода кнопок
   */
  theme = true;

  /**
   * функция для переключения значения boolean для смены тем
   */
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
   * клик по элементам aside s-abdullakh-sidebar в компоненте popular resources
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
   * клик по button в компоненете Footer
   */
  public clickOnFooter({detail}) {
    return console.log("clickOnFooter:", detail);
  }

}
