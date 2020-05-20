import {Component, Prop, h} from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: false
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  firstPage = {
    menu: [
      {linkName: 'Articles'},
      {linkName: 'Events'},
      {linkName: 'Reports'},
      {linkName: 'Costumer Stories'}
    ],
    sidebar: [
      {
        category: 'Report',
        title: 'Explore Intagram Video: How to convert, engage, and get more Intagra...',
        btnText: 'Read Report'
      },
      {
        category: 'Blog Post',
        title: 'Explore Intagram Video: How to convert, engage, and get more Intagra...',
        btnText: 'Read Report'
      },
      {
        category: 'Webinar',
        title: 'Explore Intagram Video: How to convert, engage, and get more Intagra...',
        btnText: 'Read Report'
      },
      {
        category: 'Report',
        title: 'Explore Intagram Video: How to convert, engage, and get more Intagra...',
        btnText: 'Read Report'
      }
    ],
    newPost: [
      {block: 'new-post', category: 'Blog Post', title: '4 organic ways to improve your website KPIs', btnText: 'Read Report'},
      {block: 'new-post', category: 'Blog Post', title: 'How to turn your next event into a video content goldmine', btnText: 'Read Report'},
      {block: 'new-post', category: 'Blog Post', title: 'How to quickly turn ypur podcast into a video script', btnText: 'Read Report'}
    ],
    popularAside: [
      {
        category: 'Blog Post',
        title: 'Micro-influencers and B2C brand videos: A match made in heaven',
        btnText: 'Read Story'
      },
      {
        category: 'Webinar',
        title: 'Webinar: Improving content marketing through visual storytelling',
        btnText: 'Watch Webinar'
      },
      {
        category: 'Report',
        title: 'How to reach audiences with social video: From Millennials to Gen Z',
        btnText: 'Read Report'
      }
    ],
    events: [
      {
        block: 'events',
        category: 'Blog Post',
        title: '4 organic ways to improve your website KPIs',
        btnText: 'Read Report'
      },
      {
        block: 'events',
        category: 'Blog Post',
        title: 'How to turn your next event into a video content goldmine',
        btnText: 'Read Report'
      },
      {
        block: 'events',
        category: 'Blog Post',
        title: 'How to quickly turn ypur podcast into a video script',
        btnText: 'Read Report'
      }
    ],
    newlistner: [
      {
        title: 'Ready to take a test drive?',
        subtitle: 'We`ll help you elevate strategy. Prices starting from $49 a month.',
        linkText: 'See pricing',
        btnText: 'Try it Free',
        theme: true
      }
    ]

  };

  render() {
    return(
      <div>
        <my-header menu = {this.firstPage.menu}/>
        {/*<news-a sidebar = {this.firstPage.sidebar}/>*/}
        {/*<new-post newPost = {this.firstPage.newPost}/>*/}
        {/*<popular-resources popularAside = {this.firstPage.popularAside}/>*/}
        {/*<events-a events = {this.firstPage.events}/>*/}
        {/*<new-listiner newlistner={this.firstPage.newlistner}/>*/}
        {/**/}
        <app-blog></app-blog>
        <footer-a/>
      </div>
  );
  }
}
