---
uuid: 9911c596-defd-4366-bf15-1929b926cb43
archived: true
---

Using pseudo selectors we can make our webpages a little bit more interactive. For example, we can do so by creating tooltips. Tooltips are those little boxes that appear next to your mouse, often when you're hovering over something, and provide some extra information.

For example:

![](https://cdn-images-1.medium.com/max/1600/1*TZq6RcW9ahtPlRywtlg9Yw.gif)

To create these tooltips, we can use the **adjacent sibling selector**.

```html
<h2>Instructions</h2>
<p>Tooltip</p>
```

```css
p {
  display: none;
}

h2:hover + p {
  display: block;
}
```

![](https://cl.ly/3m2g241n3j1y/Screen%20Recording%202017-10-22%20at%2002.35%20PM.gif)

## Tasks

- In a new pen on [CodePen](https://codepen.io/), add CSS to the following HTML to create tooltips for the start, pause, and play icons.

```html
<main>
  <div>
    <img src="https://n6-img-fp.akamaized.net/free-icon/video-camera_318-124016.jpg?size=338&ext=jpg" alt="">
    <p> Click to start recording </p>
  </div>

  <div>
    <img src="https://image.freepik.com/free-icon/video-pause-button_318-33989.jpg" alt="">
    <p> Click to pause </p>
  </div>


  <div>
    <img src="https://image.flaticon.com/icons/svg/26/26025.svg" alt="">
    <p> Click to play </p>
  </div>
</main>
```

When you're done, it should look something like this:

![](https://cl.ly/1k3Y0m3d3G1C/Screen%20Recording%202017-11-03%20at%2012.35%20PM.gif)

As always, feel free to add your own design or styles to the icons and tooltips.
