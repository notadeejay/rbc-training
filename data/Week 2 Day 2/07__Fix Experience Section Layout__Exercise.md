---
uuid: 33067b13-1aae-47ca-87ff-7e388c7867ce
---

Now that we're getting the hang of Flexbox, let's move on to the **Experience** section.


## Tasks

- Add styles so the date and job title sit on the same horizontal line
- Add styles so the company name and description sit on the same horizontal line
- Adjust the margin and padding in your **Experience** section to reflect the design

Once you're finished styling your **Experience** section, it should look something like this:

![](https://cl.ly/1n2Y3q3i3o0n/Image%202017-10-01%20at%202.13.02%20PM.png)

## Tips & Tricks

These properties might come in handy as you're styling this section.

#### align-items

A property added to the flexbox container, or parent, that defines how the flex items are laid out along the cross axis.

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

#### flex-grow

A property applied to a flex item, that dictates the amount of space inside the flex container that the item should take up.

```css
.child {
  flex-grow: 3;
}
```
