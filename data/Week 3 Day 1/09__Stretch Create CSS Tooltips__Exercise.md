---
uuid: 9911c596-defd-4366-bf15-1929b926cb43
---

When we start using pseudo selectors, we can start to make our webpage a little bit
more interactive.

We can also add tooltips using just HTML and CSS. Tooltips are those little boxes that appear, often when you're hovering over something, and provide some information.


For example:

![](https://cdn-images-1.medium.com/max/1600/1*TZq6RcW9ahtPlRywtlg9Yw.gif)

To do this, we can use the **Adjacent Sibling Selector**


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

### Tasks

- [ ] Add CSS to this HTML to create tooltips for these icons

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
