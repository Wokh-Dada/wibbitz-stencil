# footer-a



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description                          | Type  | Default     |
| -------- | --------- | ------------------------------------ | ----- | ----------- |
| `footer` | `footer`  | массив для вывода компонентов footer | `any` | `undefined` |


## Events

| Event           | Description                 | Type               |
| --------------- | --------------------------- | ------------------ |
| `clickOnFooter` | клик по в компоненте footer | `CustomEvent<any>` |


## Dependencies

### Used by

 - [my-component](../../../my-component)

### Depends on

- [s-abdullakh-footer-menu](./res/view/s-abdullakh-footer-menu)
- [s-abdullakh-footer-icon-block](./res/view/s-abdullakh-footer-icon-block)

### Graph
```mermaid
graph TD;
  s-abdullakh-footer --> s-abdullakh-footer-menu
  s-abdullakh-footer --> s-abdullakh-footer-icon-block
  s-abdullakh-footer-menu --> s-abdullakh-footer-links
  s-abdullakh-footer-icon-block --> s-abdullakh-footer-icons
  my-component --> s-abdullakh-footer
  style s-abdullakh-footer fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
