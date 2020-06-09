# new-post



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute        | Description     | Type     | Default     |
| -------------- | ---------------- | --------------- | -------- | ----------- |
| `newPost`      | --               | массив newsPost | `any[]`  | `undefined` |
| `newPostTitle` | `new-post-title` | текст заголовка | `string` | `undefined` |


## Events

| Event                  | Description                                  | Type               |
| ---------------------- | -------------------------------------------- | ------------------ |
| `clickNewPost`         | клик по в компоненте SAbdullakhNewPost       | `CustomEvent<any>` |
| `clickOnNewSinglePost` | клик по в компоненте SAbdullakhNewSinglePost | `CustomEvent<any>` |


## Dependencies

### Used by

 - [my-component](../../../my-component)

### Depends on

- [s-abdullakh-new-single-post](../s-abdullakh-new-single-post)

### Graph
```mermaid
graph TD;
  s-abdullakh-new-post --> s-abdullakh-new-single-post
  my-component --> s-abdullakh-new-post
  style s-abdullakh-new-post fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
