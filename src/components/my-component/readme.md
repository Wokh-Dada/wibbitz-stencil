# my-component



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description     | Type     | Default     |
| -------- | --------- | --------------- | -------- | ----------- |
| `first`  | `first`   | The first name  | `string` | `undefined` |
| `middle` | `middle`  | The middle name | `string` | `undefined` |


## Dependencies

### Depends on

- [my-header](../res/view/my-header)
- [news-a](../theme-one/res/view/news-a)
- [app-blog](../theme-two/res/view/app-blog)
- [footer-a](../res/view/footer-a)

### Graph
```mermaid
graph TD;
  my-component --> my-header
  my-component --> news-a
  my-component --> app-blog
  my-component --> footer-a
  news-a --> sidebar-a
  style my-component fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
