# my-header



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute        | Description                    | Type                  | Default     |
| --------------- | ---------------- | ------------------------------ | --------------------- | ----------- |
| `logoUrl`       | `logo-url`       | ссылка на изображение логотипа | `string`              | `undefined` |
| `menu`          | --               | массив меню                    | `AbdullakhMyHeader[]` | `[]`        |
| `subscribeText` | `subscribe-text` | ссылка на изображение логотипа | `string`              | `undefined` |
| `theme`         | `theme`          | массив меню                    | `boolean`             | `undefined` |


## Events

| Event                | Description          | Type               |
| -------------------- | -------------------- | ------------------ |
| `clickOnHeader`      | клик по логотипу     | `CustomEvent<any>` |
| `clickOnSwitchTheme` | клик по Switch Theme | `CustomEvent<any>` |
| `clickOnTheme`       | клик по логотипу     | `CustomEvent<any>` |


## Dependencies

### Used by

 - [my-component](../../../my-component)

### Depends on

- [s-abdullakh-menu-item](./res/view/s-abdullakh-menu-item)

### Graph
```mermaid
graph TD;
  s-abdullakh-header --> s-abdullakh-menu-item
  my-component --> s-abdullakh-header
  style s-abdullakh-header fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
