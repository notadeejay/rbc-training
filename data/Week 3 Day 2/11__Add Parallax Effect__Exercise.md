---
uuid: 11b3ad10-b326-4d79-ab9d-03859ca5059d
stretch: true
---

Chances are, you've come across a website that uses the parallax effect.

If not, here is an example. Notice how the images seem to stay still, while the text scrolls over them.

![](https://cl.ly/3z1C1e3w0q41/Screen%20Recording%202017-10-22%20at%2003.32%20PM.gif)

To add this effect to our webpage, we need to use the `background` property.
We can set several properties on the background of an element.

### background: url()

Just like we can set the `background-color` of an element, we can also set the background to an image, using `url()`. Just like with our images, and links, we need to tell CSS where to find the image we want to display in the background. In this example, we've pulled an example from Unsplash (https://unsplash.com/).

```css
div {
  background: url('https://images.unsplash.com/photo-1471644518115-1f02e9819854?w=1500');
}
```

### background-position

The `background-position` property sets the starting position of a background image.By default, a background image is placed at the top-left corner of an element, and repeated both vertically and horizontally.

```css
div {
  background-position: cover;
}
```

We could also set `background-position` to:
- top
- left
- bottom
- right

**Tip**: By default, a background-image is placed at the top-left corner of an element, and repeated both vertically and horizontally.

### background-attachment
The background attachment property sets whether a background image is fixed, or scrolls with the rest of the page. In order to create the parallax effect, we'll set it to fixed.

```css
div {
  background-attachment: fixed;
}
```

We can also set `background-attachment` to:
- scroll
- local

### Put it all together:

```html
  <div>
    <h2> Welcome </h2>
  </div>
```
### Example

```css
div {
  background: url('https://images.unsplash.com/photo-1471644518115-1f02e9819854?w=1500');
  background-position: cover;
  background-attachment: fixed;
}
```

## Tasks

- [ ] Experiment with adding a parallax effect to your webpage

## Resources

- A parallax example: <http://learning-parallax.surge.sh>
- Unsplash offers amazing free photos that you can use in your projects: <https://unsplash.com/>
