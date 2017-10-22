---
uuid: 11b3ad10-b326-4d79-ab9d-03859ca5059d
---


Chances are, you've come across a website that uses the parallax effect.

If not, here is an example. Notice how the images seem to stay still, while the text scrolls over them.

![](https://cl.ly/3z1C1e3w0q41/Screen%20Recording%202017-10-22%20at%2003.32%20PM.gif)

To add this effect to our webpage, we need to use the `background` property.
We can set several properties on the background of an element.

### background: url()

```css
  div {
    background: url('https://images.unsplash.com/photo-1471644518115-1f02e9819854?w=1500');
  }
```

### background-position
The background-position property sets the starting position of a background image.

```css
div {
  background-position: cover;
}
```

**Tip**: By default, a background-image is placed at the top-left corner of an element, and repeated both vertically and horizontally.

### background-attachment

```css
div {
  background-attachment: fixed;
}
```

Can be set to:

#### fixed

The background is fixed relative to the viewport. Even if an element has a scrolling mechanism, the background doesn't move with the element.

#### local

The background is fixed relative to the element's contents. If the element has a scrolling mechanism, the background scrolls with the element's contents.

#### scroll

The background is fixed relative to the element itself and does not scroll with its contents.


### Put it all together:
```css
div {
  background: url('https://images.unsplash.com/photo-1471644518115-1f02e9819854?w=1500');
  background-position: cover;
  background-attachment: fixed;
}
```

## Tasks

- [ ] Experiment with adding a parallax effect to your webpage

### Examples

- http://learning-parallax.surge.sh


### Resources
- Unsplash is a great place to find awesome photos that you can use in your projects
  - https://unsplash.com/
