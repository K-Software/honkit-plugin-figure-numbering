# honkit-plugin-figure-numbering

This plugin replace markdown code: 

```markdown
    ![atl](image.png)
```

on html code:

```html
    <figure style="text-align: center;">
        <img src="image.png" alt="alt">
        <figcaption> Fig 1 : alt </figcaption>
    </figure>
```

The number of figures within the same pages is automatically managed by the plugin