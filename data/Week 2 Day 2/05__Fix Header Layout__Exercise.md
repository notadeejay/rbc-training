---
uuid: 2bcda904-adcf-4fbf-ab2a-888edf5ca961
---

Now, let's move on to adjusting the layout of your webpage. Just like we've done so far, we'll go section by section.

Let's start with the **Header** of your webpage.

## Tasks

- Using flexbox, style the **Nav Bar** so your name and the anchor tags are on the same line
- Using flexbox, add styles so your name and occupation sit next to your image
- Adjust the margin and padding you've added to elements in the **Header**, if needed

When you've added these styles, your **Header** should look something like this:

![](https://cl.ly/323u3M3B3U1a/Image%202017-10-01%20at%201.53.10%20PM.png)

## Tips & Tricks

#### Flexbox

To use flexbox, add the `display:flex` property to the **parent** element.

```css
.parent {
  display: flex;
}
```

#### justify-content

A property added to the flexbox container that defines how the flex items are laid out along the main axis.

Can be set to:

- `flex-start`
- `flex-end`
- `space-between`
- `space-around`
- `space-evenly`


#### align-items

A property added to the flexbox container (parent), that defines how the flex items are laid out along the cross axis.

Can be set to:

- `flex-start`
- `flex-end`
- `center`
- `stretch`
- `baseline`

```css
.parent {
  display: flex;
  align-items: flex-start;
}
```
