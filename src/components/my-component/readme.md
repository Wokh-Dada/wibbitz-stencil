# my-component



<!-- Auto Generated Below -->


## Dependencies

### Depends on

- [my-header](../res/view/my-header)
- [news-a](../theme-one/res/view/news-a)
- [new-post](../res/view/new-post)
- [popular-resources](../theme-one/res/view/popular-resources)
- [events-a](../theme-one/res/view/events-a)
- [new-listiner](../res/view/new-listiner)
- [app-blog](../theme-two/res/view/app-blog)
- [footer-a](../res/view/footer-a)

### Graph
```mermaid
graph TD;
  my-component --> my-header
  my-component --> news-a
  my-component --> new-post
  my-component --> popular-resources
  my-component --> events-a
  my-component --> new-listiner
  my-component --> app-blog
  my-component --> footer-a
  my-header --> menu-item
  news-a --> s-abdullakh-news-main-block
  news-a --> sidebar-a
  new-post --> new-single-post
  popular-resources --> popular-resources-aside
  popular-resources --> popular-resources-banner
  events-a --> new-single-post
  new-listiner --> s-abdullakh-listiner
  footer-a --> s-abdullakh-footer-menu
  footer-a --> s-abdullakh-footer-icon-block
  s-abdullakh-footer-menu --> s-abdullakh-footer-links
  s-abdullakh-footer-icon-block --> s-abdullakh-footer-icons
  style my-component fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
