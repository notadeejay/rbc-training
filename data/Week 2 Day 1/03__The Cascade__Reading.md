---
uuid: c7f71617-089b-4182-b2d2-5075bbd087d7
---

CSS stands for **Cascading Style Sheets**. So, where does the cascade come in?

The cascade means that CSS styles that are applied _later_ can override styles that were declared earlier.
For example, if this was our CSS file:

```css
p {
  font-size: 20px;
  color: blue;
}

#alert {
  padding: 10px;
  background-color: red;
}

p {
  color: green;
}
```

Our paragraph elements would have a green text, because the second `color` rule would override the first.
If you're struggling to figure out why some styles aren't being applied to your elements, take a second and double
check you're not overriding it later in your CSS file.
