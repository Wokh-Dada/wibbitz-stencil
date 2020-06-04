import {Component, Prop, h} from '@stencil/core';
import {blog, firstPage, header} from "../../utils/mock";

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
          onClickOnMenu={(item) => {this.clickOnMenu(item)}}
          subscribeText={header.subscribeText}
          onClickOnSubscribeButton =
            { ()=> {console.log('нажали на кнопку button subscribe')} }
        />
        <news-a
          sidebar = {firstPage.sidebar}
          onClickOnSidebar={(event) => this.clickOnSidebar(event)}
          onClickOnNewsButton={(event) => this.clickOnNewsButton(event)}
        />
        <new-post
          newPost = {firstPage.newPost}
          onClickNewPost =
            { (event)=> {this.onClickOnNewPost(event)} }
        />
        <popular-resources
          popularAside = {firstPage.popularAside}
          onClickOnAside =
            { (event)=> {this.clickOnAside(event)}}
        />
        <events-a
          events = {firstPage.events}
          // onClickReadReportOnEventsNewSinglePost =
          //   { ()=> {console.log('нажали на кнопку ReadReport в  events')} }
        />
        <new-listiner newlistner={firstPage.newlistner}/>

        {/*<app-blog p={blog.p}></app-blog>*/}
        <footer-a/>
      </div>
    );
  }

  /**
   * клик по элементам меню
   */
  public clickOnMenu({detail}){
    return console.log('clickOnMenu', detail)
  }

  /**
   * клик по элементам сайдбара
   */
  public clickOnSidebar({detail}) {
    return console.log("clickOnSidebar", detail);
  }

  /**
   * клик по button в компоненете news
   */
  public clickOnNewsButton({detail}) {
    return console.log("clickOnNewsButton", detail);
  }

  /**
   * клик по ссылке read report в компоненте newpost
   */
  public onClickOnNewPost({detail}) {
    return console.log("clickOnNewPost", detail);
  }

  /**
   * клик по элементам aside sidebar в компоненте popular resources
   */
  public clickOnAside({detail}) {
    return console.log("clickOnAside", detail);
  }
}
