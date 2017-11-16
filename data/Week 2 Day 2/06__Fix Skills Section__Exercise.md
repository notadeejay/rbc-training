---
uuid: b98cdcab-5b99-4f01-84a9-878f1bf2379c
---

Next, we'll move on to your **Skills** section. Next class, we'll style those `meter` tags
to look just like the design. For today, we'll just focus on fixing the layout.

## Tasks

- Add styles so the skill name, `<meter>` and percentage are all in a row
- Add styles so the `<meter>` takes up twice as much space as the skill name and percentage
- Adjust the margin and padding in your **Skills** section to match the design


When you are finished, your **Skills** section should look something like this:

![](https://cl.ly/1S1d01451e3G/Image%202017-10-01%20at%202.05.52%20PM.png)


## Tips & Tricks

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


#### flex

A property applied to a flex item, that dictates the amount of space inside the flex container the item should take up.

```css
.child {
  flex: 3;
}
```
